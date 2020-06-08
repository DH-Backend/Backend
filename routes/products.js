var express = require('express');
var router = express.Router();
const controller = require('../controllers/productsController');

router.get('/', controller.products);

router.get('/cart', controller.cart);

router.get('/create', controller.create);
router.post('/create', controller.createpp);

router.get('/:id', controller.detail);

router.get('/:id/edit', controller.edit);
router.put('/:id/edit', controller.editpp);

router.delete('/:id', controller.delete);



module.exports = router;