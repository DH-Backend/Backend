var express = require('express');
var router = express.Router();
const controller = require('../controllers/indexController');

router.get('/', controller.index);
router.post('/', controller.indexpp);

module.exports = router;
