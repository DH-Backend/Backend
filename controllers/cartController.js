let db = require('../database/models')
module.exports = {
    add: async (req, res) => {
        let uno = await db.Products.findByPk(req.params.id);
        let dos = await db.Users.findByPk(res.locals.logeado.id);
        uno.addProductsusers(dos);
        res.redirect ('/products/cart');
    }, 
    delete: async (req, res) => {
        let uno = await db.Products.findByPk(req.params.id);
        let dos = await db.Users.findByPk(res.locals.logeado.id);
        uno.removeProductsusers(dos);
        res.redirect ('/products/cart');
    }
}