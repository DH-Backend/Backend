var express = require('express');
var router = express.Router();
const fs = require ('fs');
const path = require ('path');
const todoslosusuarios = path.join(__dirname, '../data/usuarios.json');
const bcrypt = require('bcrypt');
const controller = require('../controllers/loginController');
const invitado = require('../middlewares/invitado');
const { check, validationResult, body } = require('express-validator');

router.get('/', controller.login);
router.post('/', [
    body('email').custom(function(valor){
        let leo = fs.readFileSync(todoslosusuarios, 'utf-8');
        let convierto = JSON.parse(leo);
        let filter = convierto.find(x => x.email == valor);
        if (filter) {
            return true
        }
        return false;
    }).withMessage('Email incorrecto'),
    body('contraseña').custom(function(valor, {req}){
        let leo = fs.readFileSync(todoslosusuarios, 'utf-8');
        let convierto = JSON.parse(leo);
        let filter = convierto.find(x => x.email == req.body.email);
        if (filter) {
            if (bcrypt.compareSync(req.body.contraseña, filter.contraseña)) {
            return true
        }
    }
        return false;
}).withMessage('Contraseña incorrecta'),
] ,controller.loginpp);

module.exports = router;