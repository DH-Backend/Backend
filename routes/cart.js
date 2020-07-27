var express = require('express');
var router = express.Router();
const controller = require('../controllers/cartController');

router.post('/:id', controller.add);

router.post('/:id/delete', controller.delete);

module.exports = router;