'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SoftSkills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      desc: {
        type: Sequelize.STRING
      },     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SoftSkills');
  }
};