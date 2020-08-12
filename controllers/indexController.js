let db = require('../database/models')

module.exports = {
    index: async (req, res) => {

        let uno = await db.Language.findAll();
        let dos = await db.Products.findOne({
            where: {id:35}
        });
        let tres = await db.Products.findOne({
            where: {id:40}
        });
        let cuatro = await db.Products.findOne({
            where: {id:44}
        });
        let cinco = await db.Products.findOne({
            where: {id:42}
        });

        res.render ('index', {uno, dos, tres, cuatro, cinco});
    }, 
    indexpp: (req, res) => {
        if (req.body.buscador) {
            db.Products.findAll({include: ['productslanguages'],
            where: {name: {[db.Sequelize.Op.substring]: '%' + req.body.buscador + '%'}}
        }).then((convierto) => {
            res.render('resultadoBusqueda', {convierto});
        });
        } else {
            res.render('resultadoBusqueda', {convierto: ''});
        }
    }
}