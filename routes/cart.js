var express = require('express');
var router = express.Router();
const controller = require('../controllers/cartController');

router.post('/add', controller.add);

router.post('/delete', controller.delete);

module.exports = router;