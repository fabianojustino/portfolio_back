'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SoftSkills',
    [{     
      desc: 'Aprender a aprender',  
    },
    {     
      desc: 'Raciocínio Lógico',      
    },
    ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SoftSkills', null, {});
  }
};
