var express = require('express');
var router = express.Router();
const controller = require('../controllers/loginController');

router.get('/', controller.login);

module.exports = router;