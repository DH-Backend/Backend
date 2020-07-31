const db = require('../database/models');
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
module.exports = {
    profile: (req, res) => {
        if (res.locals.logeado){
            db.Users.findAll().then((valor) => {
            res.render('perfil', {valor});
        });
        res.render ('perfil', {valor: ''});
        }
    },
    profilepp: (req, res) => {
        if (req.session.registro){
            req.session.registro = null;
            res.cookie('recordame' , '', {expire : new Date() - 1});

            res.redirect ('/');
        }
    }, 
    edit: (req, res) => {
        db.Users.findByPk(req.params.id).then((valor) => {
            res.render('profileEdit', {valor, errors: ''});
        });
    },
    editpp: (req, res) => {
        let validation = validationResult(req);
        if (validation.isEmpty()){
            let usuario = {
                id: res.locals.logeado.id,
                name: req.body.nombre,
                last_name: req.body.apellido,
                email: req.body.email
            }

            if (req.file) {
                usuario['avatar'] = req.file.filename
            }
                db.Users.update(usuario, {
                    where: {id: req.params.id}
                });
            res.locals.logeado = usuario;
            req.session.registro = usuario;
                res.redirect('/profile');
        } else {
            db.Users.findByPk(req.params.id).then((valor) => {
                res.render('profileEdit', {errors: validation.mapped(), valor});
            });
        }
    },
    password: (req, res) => {
        res.render('profilePassword', {errores: ''});
    },
    passwordpp: (req, res) => {
        if (req.session.email){
            var sesionemail = req.session.email;
        }
        let hasheado = bcrypt.hashSync(req.body.contraseña, 10);
        let validation = validationResult(req);
        if(validation.isEmpty()){
                db.Users.update({
                    password:hasheado
                }, {
                    where: {email:sesionemail}
                });
                res.redirect('/profile');
        }
        res.render('profilePassword', {errores : validation.mapped()});
    }
}