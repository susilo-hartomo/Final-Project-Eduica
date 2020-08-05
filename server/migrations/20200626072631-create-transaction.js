'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      TeacherId: {
        type: Sequelize.INTEGER
      },
      StudentId: {
        type: Sequelize.INTEGER
      },
      paid: {
        type: Sequelize.BOOLEAN
      },
      price: {
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.TIME
      },
      date: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Transactions');
  }
};