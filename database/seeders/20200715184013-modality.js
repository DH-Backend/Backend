'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('modality', [
      {name: 'Online'},
      {name: 'Presencial'}
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('modality', null, {});
  }
};
