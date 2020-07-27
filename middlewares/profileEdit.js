function edit (req, res, next) {
    if (req.params.id != res.locals.logeado.id) {
        let error = 'Lo sentimos, no puedes acceder a esa ruta';
        res.render('errors', {error});
    }
    next();
}
module.exports = edit;