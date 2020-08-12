const db = require('../database/models');
function contador (req, res, next) {
    if (res.locals.logeado) {
        
        db.Users.findByPk(res.locals.logeado.id, {include: ['productsusers']}).then((valor) => {
            let dos = valor.productsusers.length;
            res.locals.contador = dos;
        });
    }
    next();
}

module.exports = contador;