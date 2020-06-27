function agregar (req, res, next) {
    if (req.session.registro == undefined){
        res.redirect('/login');
    } else {
        next();
    }
}
module.exports = agregar;