var express = require('express');
var router = express.Router();
const controller = require('../controllers/productsController');
const paraelcarrito = require('../middlewares/paraelcarrito');
const agregar = require('../middlewares/paraagregar');

router.get('/', controller.products);
//router.post('/:id', agregar ,controller.productspp);

router.get('/cart', paraelcarrito, controller.cart);

router.get('/create', controller.create);
router.post('/create', controller.createpp);

router.get('/:id', controller.detail);

router.get('/:id/edit', controller.edit);
router.put('/:id/edit', controller.editpp);

router.delete('/:id', controller.delete);



module.exports = router;