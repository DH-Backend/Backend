'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
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
      last_name: {
          allowNull: false,
          type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
          allowNull: false,
          type: Sequelize.STRING
      },
      avatar: {
          allowNull: true,
          type: Sequelize.STRING,
          defaultValue: ''
      },
      admin: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: false
    }
  });
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable ('users');
  }
};
