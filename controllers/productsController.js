const fs = require('fs');
const path = require('path');
const todoslosproductos = path.join(__dirname, '../data/todoslosproductos.json');
module.exports = {
    products: (req, res) => {
        if (req.session.registro){
                var usuario = req.session.registro;
        }
        let leo = fs.readFileSync(todoslosproductos, 'utf-8');
        let convierto = JSON.parse(leo);
        res.render('productslist', {convierto, usuario});
    },
    /*productspp: (req, res) => {
        let elid = req.params.id;
        let leo = fs.readFileSync(todoslosproductos, 'utf-8');
        let convierto = JSON.parse(leo);
        let filter = convierto.find(x => x.id == elid);
        if (filter){
            let leoo = fs.readFileSync(carrito, 'utf-8');
            let conviertoo = JSON.parse(leoo);
            let filterr = conviertoo.find(x => x.id == elid);
            if (filterr) {
                res.render('productCart', {conviertoo, usuario: ''});
            } else {
                conviertoo.push(filter);
                let transformo = JSON.stringify(conviertoo);
                fs.writeFileSync(carrito, transformo);
                res.render('productCart', {conviertoo, usuario: ''});
            }
        }
    },*/
    cart: (req, res) => {
        if (req.session.registro){
            var usuario = req.session.registro;
        }
        res.render('productCart', {usuario, conviertoo: ''});
    },
    create: (req, res) => {
        res.render('productAdd');
    },
    createpp: (req, res) => {
        let uno = req.body;
        let leo = fs.readFileSync(todoslosproductos, 'utf-8');
        let convierto = JSON.parse(leo);
        let filter = convierto.find(x => x.nombre_curso == req.body.nombre_curso);
        if (filter) {
            res.send('ya estaba creado');
        } else {
            convierto.unshift(uno);
            let transformo = JSON.stringify(convierto);
            fs.writeFileSync(todoslosproductos, transformo);
            res.render('/productslist');
        }
    },
    detail: (req, res) => {
        let dos = req.params;
        if (req.session.registro){
            var usuario = req.session.registro;
        }
        let leo = fs.readFileSync(todoslosproductos, 'utf-8');
        let convierto = JSON.parse(leo);
        let filter = convierto.find(x => x.id == req.params.id);
        if (filter) {
            res.render('productDetail', {filter, usuario});
        } else {
            res.send('ese producto no esta en mi base de datos');
        }
    },
    edit: (req, res) => {
        let leo = fs.readFileSync(todoslosproductos, 'utf-8');
        let convierto = JSON.parse(leo);
        let filter = convierto.find(x => x.id == req.params.id);
        res.render('productEdit', {filter});
    },
    editpp: (req, res) => {
        let leo = fs.readFileSync(todoslosproductos, 'utf-8');
        let convierto = JSON.parse(leo);
        let filter = convierto.find(x => x.id == req.params.id);

            filter.lenguaje = req.body.lenguaje;
            filter.nombre_curso = req.body.nombre_curso;
            filter.valor = req.body.valor;
            filter.duracion = req.body.duracion;
            filter.descripcion = req.body.descripcion;
            filter.contenido = req.body.contenido;
            filter.plan = req.body.plan;
            filter.inicio = req.body.inicio;
            filter.modalidad = req.body.modalidad;

        let filterdos = convierto.filter(x => x.id != req.params.id);
        filterdos.unshift(filter);
        let transformo = JSON.stringify(filterdos);
        fs.writeFileSync(todoslosproductos, transformo);
        res.redirect('/products');
    },
    delete: (req, res) => {
        let leo = fs.readFileSync(todoslosproductos, 'utf-8');
        let convierto = JSON.parse(leo);
        let filter = convierto.filter(x => x.id != req.params.id);
        let transformo = JSON.stringify(filter);
        fs.writeFileSync(todoslosproductos, transformo);
        res.redirect('/products');
    }
}