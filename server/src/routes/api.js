const express = require('express');
const { registration, login, profileUpdate } = require('../controllers/UsersController');
const { createTask, updateTaskStatus } = require('../controllers/TasksController');

const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');


const router = express.Router();

//Routes
router.post('/registration', registration);
router.post('/login', login);
router.post('/profileUpdate', AuthVerifyMiddleware, profileUpdate);
router.post('/createTask', AuthVerifyMiddleware, createTask);
router.get('/updateTaskStatus/:id/:status', AuthVerifyMiddleware, updateTaskStatus);

module.exports = router;