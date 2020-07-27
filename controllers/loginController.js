const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const db = require('../database/models');

module.exports = {
    login: (req, res) => {
        res.render('login', {usuario: '', errors : ''});
    }, 
    loginpp: (req, res) => {
        let validation = validationResult(req);
        if (validation.isEmpty()){
            return db.Users.findOne({
                where: {email:req.body.email}
            }).then((valor) => {
                    req.session.registro = valor;
                    res.locals.logeado = valor;
                    req.session.email = valor.email;
                    if (req.body.recordame != undefined){
                        res.cookie('recordame', valor, {maxAge: 60*60*24*30});
                    }
                    res.redirect('/profile');
        });
        } else {
            res.render('login', {usuario:'', errors : validation.mapped()});
        }
    }
}