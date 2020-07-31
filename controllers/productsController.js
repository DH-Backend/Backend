const db = require('../database/models');
const {validationResult} = require('express-validator');
module.exports = {
    products: (req, res) => {
        if (req.body.id) {
            db.Language.findByPk({
                include: ['languagesproducts']
            })
            .then ((valor) => {
                res.render('productlist', {valor});
            });
        }
        db.Products.findAll({
            include: ['productslanguages']
        }).then((convierto) => {
            res.render('productslist', {convierto});
        })
    },
    productspp: (req, res) => {
            db.Language.findByPk(req.params.id, {
                include: ['languagesproducts']
            })
            .then ((valor) => {
                res.render('productlistdos', {valor});
            });
    },
    cart: async (req, res) => {
        let uno = await db.Users.findByPk(res.locals.logeado.id, {include: ['productsusers']});
        res.render('productCart', {uno});
    },
    create: async (req, res) => {
        let uno = await db.Language.findAll();
        let dos = await db.Modality.findAll();
        res.render('productAdd', {errors:'', uno, dos, body: {}});
    },
    createpp: async (req, res) => {
        let validation = validationResult(req);
        if (validation.isEmpty()) {
        let producto = {
            name: req.body.nombre,
            languageId: req.body.lenguaje,
            modalityId: req.body.modalidad,
            description: req.body.descripcion,
            content: req.body.contenido,
            date: req.body.fechainicio,
            duration: req.body.duracion,
            value: req.body.valor
        }
            db.Products.create(producto).then(() => {
                res.redirect('/products');
                });
        } else {
            let uno = await db.Language.findAll();
            let dos = await db.Modality.findAll();
            res.render('productAdd', {errors : validation.mapped(), uno, dos, body: req.body});
        }},
    detail: (req, res) => {
        db.Products.findByPk(req.params.id, {
            include: ['productslanguages']
        }).then((filter) => {
                res.render('productDetail', {filter});
        });
    },
    edit: async (req, res) => {
        let filter = await db.Products.findByPk(req.params.id,{
            include: ['productsmodality']
        });
        let dos = await db.Modality.findAll();
        res.render('productEdit', {dos, filter, errors: ''});
    },
    editpp: async (req, res) => {
        let validation = validationResult(req);
        if (validation.isEmpty()){
            db.Products.update({
                name : req.body.nombre,
                value : req.body.valor,
                duration : req.body.duracion,
                description : req.body.descripcion,
                content : req.body.contenido,
                date : req.body.inicio,
                modalityId : req.body.modalidad
            }, {
                where: {id:req.params.id}
            });
            res.redirect('/products');
        } else {
            let filter = await db.Products.findByPk(req.params.id,{
                include: ['productsmodality']
            });
            let dos = await db.Modality.findAll();
            res.render('productEdit', {dos, filter, errors: ''});
                res.render('productEdit', {errors: validation.mapped(), filter, dos});
        }
    },
    delete: (req, res) => {
        db.Products.destroy({
            where: {id:req.params.id}
        });
        res.redirect('/products')
    }
}