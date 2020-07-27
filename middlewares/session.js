let session = function (req, res, next) {
    let usuario = req.session.registro;
    res.locals.logeado = false;
    if (res.locals.logeado != null) {
        res.locals.logeado = usuario
    }
    next();
}

module.exports = session;