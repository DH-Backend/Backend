module.exports = (sequelize, dataTypes) => {
    let alias = 'Language';
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
        }
    };
    let config = {
        tableName: 'language',
        timestamps: false
    }
    
    const language = sequelize.define(alias, cols, config);

    language.associate = (models) => {
        language.hasMany(models.Products, {
            as: 'languagesproducts',
            foreignKey: 'languageId'
        })
    }
    return language;
}