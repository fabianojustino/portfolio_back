const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skill.controllers');

router.get('/', skillController.list);
// router.use(authController.validateToken);

module.exports = router;