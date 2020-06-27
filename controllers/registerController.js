const { validationResult } = require('express-validator');
const fs = require ('fs');
const path = require ('path');
const todoslosusuarios = path.join(__dirname, '../data/usuarios.json');
const bcrypt = require('bcrypt');

module.exports = {
    register: (req, res) => {
        res.render ('register', {errors : {}, body : {}});
},
    registerpp: (req, res, next) => {
        let validation = validationResult(req);
        
        if (validation.isEmpty()){
            let leo = fs.readFileSync(todoslosusuarios, 'utf-8');
            let convierto = JSON.parse(leo);
            let filter = convierto.find(x => x.email == req.body.email);
            if(req.file) {
                imagen = req.file.filename;
            } else {
                imagen = ''
            }
            var usuarionuevo = {
                nombre : req.body.nombre,
                apellido : req.body.apellido,
                email : req.body.email,
                contraseña : bcrypt.hashSync(req.body.contraseña, 10),
                imagen : imagen
            }
            if (filter) {
                res.send('ya estaba creado');
            } else {
                convierto.push(usuarionuevo);
                let transformo = JSON.stringify(convierto);
                fs.writeFileSync(todoslosusuarios, transformo);
                req.session.registro = usuarionuevo;
                res.redirect('/login');
            }
        } else {
            res.render('register', {errors : validation.mapped(), body : req.body});
        }
}
}