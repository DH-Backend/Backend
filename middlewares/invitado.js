function invitado (req, res, next) {
    if (res.locals.logeado == null){
        next ();
    } else {
        let error = 'Lo sentimos, no puedes acceder a esa ruta';
        res.render('errors', {error});
    }
}
module.exports = invitado;