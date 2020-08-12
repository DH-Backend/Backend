let db = require('../database/models')
module.exports = {
    add: async function (req, res) {
        let uno = await db.Products.findByPk(req.body.id_curso);
        let dos = await db.Users.findByPk(res.locals.logeado.id);
        uno.addProductsusers(dos);
        return res.send({respuesta : true})
    }, 
    delete: async (req, res) => {
        let uno = await db.Products.findByPk(req.body.productoId);
        let dos = await db.Users.findByPk(res.locals.logeado.id);
        uno.removeProductsusers(dos);
        return res.send({algo: true});
    }
}