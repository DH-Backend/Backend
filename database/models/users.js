module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
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
        last_name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        email: {
          allowNull: false,
          type: dataTypes.STRING
        },
        password: {
            allowNull: false,
            type: dataTypes.STRING
        },
        avatar: {
            allowNull: false,
            type: dataTypes.STRING
        },
        admin: {
            allowNull: false,
            type: dataTypes.BOOLEAN,
            defaultValue: false
      }
    };
    let config = {
        tablename: 'users',
        timestamps: false
    }
    let users = sequelize.define(alias, cols, config);

    users.associate = (models) => {
        users.belongsToMany(models.Products, {
            as: 'productsusers',
            through: 'product_user', 
            timestamps: false,
            foreignKey: 'userId',
            otherKey: 'productId'
    }, 
    users.belongsToMany(models.Products, {
        as: 'favoritos',
        through: 'favourites', 
        timestamps: false,
        foreignKey: 'userId',
        otherKey: 'productId'
    }))}

    return users;
}