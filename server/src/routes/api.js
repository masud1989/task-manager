const express = require('express');
const { registration, login, profileUpdate } = require('../controllers/UsersController');
const { createTask, updateTaskStatus, taskListByStatus, taskStatusCount, deleteTask } = require('../controllers/TasksController');

const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');


const router = express.Router();

//Routes
router.post('/registration', registration);
router.post('/login', login);

router.post('/profileUpdate', AuthVerifyMiddleware, profileUpdate);
router.post('/createTask', AuthVerifyMiddleware, createTask);
router.post('/deleteTask/:id', AuthVerifyMiddleware, deleteTask);
router.get('/updateTaskStatus/:id/:status', AuthVerifyMiddleware, updateTaskStatus);
router.get('/taskListByStatus/:status', AuthVerifyMiddleware, taskListByStatus);
router.get('/taskStatusCount', AuthVerifyMiddleware, taskStatusCount);

module.exports = router;