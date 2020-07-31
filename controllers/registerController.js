const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models');

module.exports = {
    register: (req, res) => {
        res.render ('register', {errors : {}, body : {}});
},
    registerpp: async (req, res) => {
        let validation = validationResult(req);
        
        if (validation.isEmpty()){
            db.Users.findAll().then((valor) => {
            if(req.file) {
                avatar = req.file.filename;
            } else {
                avatar = ''
            }
            let usuarioNuevo = {
                name : req.body.nombre,
                last_name : req.body.apellido,
                email : req.body.email,
                password : bcrypt.hashSync(req.body.contraseña, 10),
                avatar: avatar
            }
                db.Users.create(usuarioNuevo).then((valor) => {
                    console.log(valor);
                    res.locals.logeado = valor;
                    req.session.registro = valor;
                    res.redirect('/');
                });
        })
        } else {
            res.render('register', {errors : validation.mapped(), body : req.body});
        }
}
}