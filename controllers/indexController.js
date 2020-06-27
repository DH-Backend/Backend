const fs = require('fs');
const path = require('path');
const productos = path.join(__dirname, '../data/todoslosproductos.json');
module.exports = {
    index: (req, res) => {
        if (req.session.registro){
            var usuario = req.session.registro;
        }
        let leo = fs.readFileSync(productos, 'utf-8');
        let convierto = JSON.parse(leo);

        res.render ('index', {convierto, usuario});
    }
}