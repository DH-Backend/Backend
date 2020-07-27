'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'products',
      'value',
      {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('products', 'value');
  }
};
