var express = require('express');
var router = express.Router();
const controller = require('../controllers/profileController');
const noinvitado = require('../middlewares/noinvitado');
const edit = require('../middlewares/profileEdit');
const {check, body} = require('express-validator');
const multer = require ('multer');
const path = require ('path');

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

router.get('/' , noinvitado, controller.profile);
router.post('/', controller.profilepp);

router.get('/edit/:id', edit, controller.edit);
router.post('/edit/:id', upload.single('imagen'), [
  check('nombre', 'El nombre debe tener al menos 2 caracteres').isLength({min: 2}),
  check('apellido', 'El apellido debe tener al menos 2 caracteres').isLength({min: 2}),
  check('email', 'Email inválido').isEmail(),
  body('imagen').custom((value, {req}) => {
    if(req.file != undefined){
      const acceptedExtensions = ['.jpg', '.jepg', '.png'];
      const ext = path.extname(req.file.originalname);
      return acceptedExtensions.includes(ext);
    }
    return true;
  }).withMessage('Sólo admitimos imágenes con extensión .jpg, .jpeg, .png')
], controller.editpp);

router.get('/password', controller.password);
router.post('/password', [
    check('contraseña', 'La contraseña debe tener entre 8 y 15 caracteres').isLength({min: 8, max: 15}),
    check('confirmarla', 'Las contraseñas no coinciden').custom((value, {req}) => {
        if (value == req.body.contraseña) {
            return true;
        }})], controller.passwordpp);

router.post('/favourites', controller.favourites);

router.post('/delete', controller.deleteFavoutires);


module.exports = router;