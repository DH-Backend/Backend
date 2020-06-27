const fs = require ('fs');
const path = require ('path');
const todoslosusuarios = path.join(__dirname, '../data/usuarios.json');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = {
    login: (req, res) => {
        res.render('login', {errors : ''});
    }, 
    loginpp: (req, res) => {
        let validation = validationResult(req);
        if (validation.isEmpty()){
            let leo = fs.readFileSync(todoslosusuarios, 'utf-8');
            let convierto = JSON.parse(leo);
            let filter = convierto.find(x => x.email == req.body.email);
            if (filter) {
                if (bcrypt.compareSync(req.body.contraseña, filter.contraseña)) {
                    req.session.registro = filter;
                    if (req.body.recordame != undefined){
                        res.cookie('recordame', req.body.email, {maxAge: 60*60*24*30});
                    }
                    res.redirect('/profile');
                } else {
                    res.render('login', {errors : validation.mapped()});
                }
            } else {
                res.render('login', {errors : validation.mapped()});
            }
        } else {
            res.render('login', {errors : validation.mapped()});
        }
    }
}