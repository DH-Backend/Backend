const fs = require ('fs');
const path = require ('path');
const todoslosusuarios = path.join(__dirname, '../data/usuarios.json');

function recordame (req, res, next) {
        let leo = fs.readFileSync(todoslosusuarios, 'utf-8');
        let convierto = JSON.parse(leo);
        let filter = convierto.find(x => x.email == req.cookies.recordame);
            if (filter) {
                    req.session.registro = filter;
                    req.session.registro.email = req.cookies.recordame
                    }
    next();
}
module.exports = recordame;