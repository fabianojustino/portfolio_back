const skillService = require('../services/skill.service');

const list = async (_req, res) => {  
    const result = await skillService.list();
    return res.status(200).json(result);
};

module.exports = { list };