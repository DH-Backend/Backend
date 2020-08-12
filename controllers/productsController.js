const db = require('../database/models');
const {validationResult} = require('express-validator');
module.exports = {
    products: async (req, res) => {
        let offset = 0;
        let limit = 7;
        if (req.query.page) {
            offset = (req.query.page - 1) * 7
        }
        if (req.query.lenguaje) {
            let categorias = await db.Language.findByPk(req.query.lenguaje, {include:['languagesproducts']});
            let dos = await db.Language.findAll();
            res.render('productslist', {categorias, dos, totalproductos: '', valor: '', convierto: ''});
        } else {
            let dos = await db.Language.findAll();
            db.Products.findAndCountAll({
                include: ['productslanguages', 'productsmodality'], 
                limit: limit, 
                offset:offset}).then((datos) => {
                    let convierto = datos.rows;
                    let productosnumero = datos.count;
                    let totalproductos = Math.ceil(productosnumero / limit);
                    res.render('productslist', {convierto, dos, totalproductos, valor: '', categorias: ''});
                });
        }
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
        let dos = uno.productsusers.length;
        res.locals.contador = dos;
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
                modalityId : req.body.modalidad,
                avatar: ''
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
    },
    categories: (req, res) => {
        db.Products.findAll({include : ['productslanguages'],
            where: {languageId: req.body.botoncategorialenguaje}
        }).then ((valor) => {
            return res.json({valor:valor});
            //res.render('productslist', {valor, convierto: '', dos: ''});
        })
    }
}