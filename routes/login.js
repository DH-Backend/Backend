var express = require('express');
var router = express.Router();
const controller = require('../controllers/loginController');
const invitado = require('../middlewares/invitado');
const { check, validationResult } = require('express-validator');

router.get('/', controller.login);
router.post('/', [
    check('email').isEmail().withMessage('El email es incorrecto'),
    check('contraseña').isLength({min: 5, max: 15}).withMessage('La contraseña debe tener entre 5 y 15 caracteres'),
] ,controller.loginpp);

module.exports = router;