module.exports = {
    profile: (req, res) => {
        if (req.session.registro){
            let usuario = req.session.registro;
            res.render ('perfil', {usuario});
        }
    },
    profilepp: (req, res) => {
        if (req.session.registro){
            req.session.registro = null;
            res.cookie('recordame' , '', {expire : new Date() - 1});

            res.redirect ('/');
        }
    }
}