let db = require('../database/models');
function favoritos (req, res, next) {
    if (res.locals.logeado){
        db.Users.findByPk(res.locals.logeado.id, {
            include : ['favoritos']
        }).then((valor) => {
            let datos = valor.favoritos
            res.locals.favourites = datos;
        });
    }
    next();
}
module.exports = favoritos;