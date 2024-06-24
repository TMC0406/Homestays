'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prices', {
      id: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      productId: {
        type: Sequelize.STRING
      },
      zalo: {
        type: Sequelize.STRING
      },
      rules: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },      
      money: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Prices');
  }
};