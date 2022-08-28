const express = require('express');
const { registration, login, profileUpdate } = require('../controllers/UsersController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');


const router = express.Router();

router.post('/registration', registration);
router.post('/login', login);
router.post('/profileUpdate', AuthVerifyMiddleware, profileUpdate);

module.exports = router;