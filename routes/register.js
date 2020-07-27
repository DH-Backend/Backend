var express = require('express');
var router = express.Router();
const controller = require('../controllers/registerController');
const invitado = require('../middlewares/invitado');
const { check, validationResult, body } = require('express-validator');
const multer = require ('multer');
const path = require ('path');
const db = require('../database/models');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      const acceptedExtensions = ['.jpg', '.jepg', '.png'];
      const ext = path.extname(file.originalname);
      if (acceptedExtensions.includes(ext)){
        cb(null, true);
      } else {
        req.file = file;
        cb(null, false);
      }
    }
  });

router.get('/' , invitado ,controller.register);
router.post('/' , upload.single('imagen'), [
    check('nombre').isLength({min: 2}).withMessage('El nombre debe tener al menos dos letras'),
    check('apellido').isLength({min: 2}).withMessage('El apellido debe tener al menos dos letras'),
    check('email').isEmail().withMessage('El email es incorrecto')
    .custom((valor) => {
      return db.Users.findOne({
        where: {email: valor}
      }).then((valor) => {if (valor != null) {
        return Promise.reject('Usuario ya registrado');
      }});
    }),
    check('contraseña', 'La contraseña debe tener entre 8 y 15 caracteres').isLength({min: 8, max: 15}),
    check('confirmarla', 'Las contraseñas no coinciden')
      .custom((valor, {req}) => {
        return valor == req.body.contraseña;
      }),
    body('imagen').custom((value, {req}) => {
      if(req.file != undefined){
        const acceptedExtensions = ['.jpg', '.jepg', '.png'];
        const ext = path.extname(req.file.originalname);
        return acceptedExtensions.includes(ext);
      }
      return true;
    }).withMessage('Sólo admitimos imágenes con extensión .jpg, .jpeg, .png')
] ,controller.registerpp);

module.exports = router;