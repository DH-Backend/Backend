function noinvitado (req, res, next) {
    if (req.session.registro != undefined){
        next ();
    } else {
        res.send('pagina solo para logeados');
    }
}
module.exports = noinvitado;