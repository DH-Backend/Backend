function editar (req, res, next) {
    if (res.locals.logeado != null){
        if (res.locals.logeado.email == 'saezfvet@gmail.com'){
            next();
        } else {
            let error = 'Lo sentimos, no puedes acceder a esa ruta';
            res.render('errors', {error});
        }
} else {
    let error = 'Lo sentimos, no puedes acceder a esa ruta';
    res.render('errors', {error});
}
}

module.exports = editar;