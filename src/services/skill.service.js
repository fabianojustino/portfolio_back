const { SoftSkills } = require('../database/models')

const skillService = {
  list: async () => {
    const list = await SoftSkills.findAll();
    return list;   
  },
}

module.exports = skillService;