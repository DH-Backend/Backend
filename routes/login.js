var express = require('express');
var router = express.Router();
const db = require('../database/models');
const path = require ('path');
const todoslosusuarios = path.join(__dirname, '../data/usuarios.json');
const bcrypt = require('bcrypt');
const controller = require('../controllers/loginController');
const invitado = require('../middlewares/invitado');
const { check, validationResult, body } = require('express-validator');

router.get('/',invitado, controller.login);
router.post('/', [
    check('email').isEmail().withMessage('Email incorrecto')
    .custom(function(valor){
        return db.Users.findOne({
            where: {email:valor}
        }).then((dato) => {
            if (dato) {
                return true;
            }
            return Promise.reject('Usuario no registrado');
        });
    }),
    check('contraseña').isLength({min: 8, max: 15}).withMessage('La contraseña debe tener entre 8 y 15 caracteres')
    .custom(function(valor, {req}){
        return db.Users.findOne({
            where: {email:req.body.email}
        }).then((dato) => {
            if (dato != null) {
                if (bcrypt.compareSync(valor, dato.password)) {
                    return true;
                } else {
                    return Promise.reject('Contraseña incorrecta');
            }
        }});
    })
] ,controller.loginpp);

module.exports = router;