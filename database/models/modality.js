module.exports = (sequelize, dataTypes) => {
    let alias = 'Modality';
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
        tableName: 'modality',
        timestamps: false
    }

    const modality = sequelize.define(alias, cols, config);

    modality.associate = (models) => {
        modality.hasMany(models.Products, {
            as: 'modalityproducts',
            foreignKey: 'modalityId'
        })
    }
    return modality;
}