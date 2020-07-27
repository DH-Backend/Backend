function noinvitado (req, res, next) {
    if (res.locals.logeado != null){
        next ();
    } else {
        res.redirect('/login');
    }
}
module.exports = noinvitado;