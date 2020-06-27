function invitado (req, res, next) {
    if (req.session.registro == undefined){
        next ();
    } else {
        res.send('pagina solo para invitados');
    }
}
module.exports = invitado;