'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('language', [
      {name: 'Javascript'},
      {name: 'Java'},
      {name: 'Python'},
      {name: 'Go'},
      {name: 'HTML y CSS'},
      {name: 'PHP'},
      {name: 'SQL'}
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('language', null, {});
  }
};
