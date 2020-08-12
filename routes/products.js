var express = require('express');
var router = express.Router();
const controller = require('../controllers/productsController');
const paraelcarrito = require('../middlewares/paraelcarrito');
const agregar = require('../middlewares/paraagregar');
const admin = require('../middlewares/edit');
const {check} = require('express-validator');

router.get('/', controller.products);

router.get('/languages/:id', controller.productspp);

router.get('/cart', paraelcarrito, controller.cart);

router.get('/create', admin, controller.create);
router.post('/create', [
    check('nombre', 'El nombre del curso debe tener al menos 5 caracteres').isLength({min:5}),
    check('lenguaje', 'Debes elegir algún lenguaje').isNumeric(),
    check('modalidad', 'Debes elegir alguna modalidad').isNumeric(),
    check('descripcion', 'La descripción debe tener al menos 20 caracteres').isLength({min: 20}),
    check('contenido', 'El contenido debe tener al menos 20 caracteres').isLength({min: 20}),
    check('fechainicio', 'Esa fecha de inicio es incorrecta')
    .custom((valor) => {
        let fechahoy = Date.now();
        let otra = new Date (valor);

        if (otra.getTime() >= fechahoy){
            return true;
        }
        return false;
    }),
    check('duracion', 'La duración debe ser un número').isNumeric()
] ,controller.createpp);

router.get('/:id', controller.detail);

router.get('/:id/edit', admin , controller.edit);
router.put('/:id/edit',[
    check('nombre', 'El nombre del curso debe tener al menos 5 caracteres').isLength({min:5}),
    check('descripcion', 'La descripción debe tener al menos 20 caracteres').isLength({min: 20}),
    check('contenido', 'El contenido debe tener al menos 20 caracteres').isLength({min: 20}),
    check('fechainicio', 'Esa fecha de inicio es incorrecta')
    .custom((valor) => {
        console.log(valor)
        let fechahoy = Date.now();
        let otra = new Date (valor);

        if (otra.getTime() >= fechahoy){
            return true;
        }
        return false;
    }),
    check('duracion', 'La duración debe ser un número').isNumeric(),
    check('valor', 'El valor debe ser un número').isNumeric(),
], controller.editpp);

router.delete('/:id', controller.delete);

router.post('/categories', controller.categories);



module.exports = router;