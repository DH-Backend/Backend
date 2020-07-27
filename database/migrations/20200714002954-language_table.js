'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('language', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING
    }
});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('language');
  }
};
