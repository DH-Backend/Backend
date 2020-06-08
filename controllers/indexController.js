const fs = require('fs');
const path = require('path');
const productos = path.join(__dirname, '../data/productos.json');
module.exports = {
    index: (req, res) => {

        let leo = fs.readFileSync(productos, 'utf-8');
        let convierto = JSON.parse(leo);

        res.render ('index', {convierto});
    }
}