'use strict';

const { DataTypes } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
          allowNull: false,
          type: Sequelize.STRING
      },
      languageId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'language'
          },
          key: 'id'
        }
      },
      modalityId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'modality'
          },
          key: 'id'
        }
      },
      description: {
          allowNull: false,
          type: Sequelize.STRING
      },
      content: {
          allowNull: false,
          type: Sequelize.STRING
      },
      date: {
          allowNull: false,
          type: Sequelize.STRING
      },
});
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable ('products');
  }
}

