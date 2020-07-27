function paraelcarrito (req, res, next) {
    if (res.locals.logeado == null){
        res.redirect('/login');
    } else {
        next();
    }
}
module.exports = paraelcarrito;