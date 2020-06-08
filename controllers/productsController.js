const fs = require('fs');
const path = require('path');
const todoslosproductos = path.join(__dirname, '../data/todoslosproductos.json');
const productos = path.join(__dirname, '../data/productos.json');
module.exports = {
    products: (req, res) => {
        let leo = fs.readFileSync(todoslosproductos, 'utf-8');
        let convierto = JSON.parse(leo);
        res.render('productslist', {convierto});
    },
    cart: (req, res) => {
        res.render('productCart');
    },
    create: (req, res) => {
        res.render('productAdd');
    },
    createpp: (req, res) => {
        let uno = req.body;
        /*req.body.id = function (){
            let ultimoid = 0;
            for (cadauno of convierto){
                if (ultimoid < req.body.id){
                    ultimoid = req.body.id;
                }
            } return ultimoid +1;
        }*/
        let leo = fs.readFileSync(todoslosproductos, 'utf-8');
        let convierto = JSON.parse(leo);
        let filter = convierto.find(x => x.nombre_curso == req.body.nombre_curso);
        if (filter) {
            res.send('ya estaba creado');
        } else {
            convierto.push(uno);
            let transformo = JSON.stringify(convierto);
            fs.writeFileSync(todoslosproductos, transformo);
            res.send('creado con exito');
        }
        res.render('productAdd');
    },
    detail: (req, res) => {
        let dos = req.params;
        let leo = fs.readFileSync(productos, 'utf-8');
        let convierto = JSON.parse(leo);
        let filter = convierto.find(x => x.id == req.params.id);
        if (filter) {
            res.render('productDetail', {filter});
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
        filterdos.push(filter);
        let transformo = JSON.stringify(filterdos);
        fs.writeFileSync(todoslosproductos, transformo);
        res.send('editado con exito');
    },
    delete: (req, res) => {
        let leo = fs.readFileSync(todoslosproductos, 'utf-8');
        let convierto = JSON.parse(leo);
        let filter = convierto.filter(x => x.id != req.params.id);
        let transformo = JSON.stringify(filter);
        fs.writeFileSync(todoslosproductos, transformo);
        res.send('eliminado con exito');
    }
}