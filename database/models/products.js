module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
            allowNull: false,
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        languageId: {
          type: dataTypes.INTEGER,
          allowNull: false
        },
        modalityId: {
          type: dataTypes.INTEGER,
            allowNull: false
        },
        description: {
            allowNull: false,
            type: dataTypes.STRING
        },
        content: {
            allowNull: false,
            type: dataTypes.STRING
        },
        date: {
            allowNull: false,
            type: dataTypes.STRING
        },
        duration: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        value: {
            allowNull: false,
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    }
    const products = sequelize.define(alias, cols, config);

    products.associate = (models) => {
        products.belongsTo(models.Language, {
            as: 'productslanguages',
            foreignKey: 'languageId'
        }),
        products.belongsToMany(models.Users, {
            as: 'productsusers',
            through: 'product_user', 
            timestamps: false,
            foreignKey: 'productId',
            otherKey: 'userId'
        }),
        products.belongsTo(models.Modality, {
            as: 'productsmodality',
            foreignKey: 'modalityId'
        });
    }
    return products;
}