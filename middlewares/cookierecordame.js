const db = require('../database/models');

function recordame (req, res, next) {

    if (req.cookies.recordame){
        res.locals.logeado = req.cookies.recordame;
        req.session.registro = req.cookies.recordame;
    }
    next();
}
module.exports = recordame;