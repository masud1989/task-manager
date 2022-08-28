const express = require('express');
const { registration, login } = require('../controllers/UsersController');



const router = express.Router();

router.post('/registration', registration);
router.post('/login', login);

module.exports = router;