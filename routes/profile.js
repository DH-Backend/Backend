var express = require('express');
var router = express.Router();
const controller = require('../controllers/profileController');
const noinvitado = require('../middlewares/noinvitado');

router.get('/' , noinvitado, controller.profile);
router.post('/' , noinvitado, controller.profilepp);

module.exports = router;