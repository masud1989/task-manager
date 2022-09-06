const express = require('express');
const router = express.Router();
const { registration, login, profileUpdate, profileDetails, recoverVerifyEmail } = require('../controllers/UsersController');
const { createTask, updateTaskStatus, taskListByStatus, taskStatusCount, deleteTask } = require('../controllers/TasksController');

const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');




//Routes
router.post('/registration', registration);
router.post('/login', login);

// Routes with middleware
router.post('/profileUpdate', AuthVerifyMiddleware, profileUpdate);
router.get('/profileDetails', AuthVerifyMiddleware, profileDetails);
router.get('/recoverVerifyEmail/:email',  recoverVerifyEmail);

router.post('/createTask', AuthVerifyMiddleware, createTask);
router.get('/deleteTask/:id', AuthVerifyMiddleware, deleteTask);
router.get('/updateTaskStatus/:id/:status', AuthVerifyMiddleware, updateTaskStatus);
router.get('/taskListByStatus/:status', AuthVerifyMiddleware, taskListByStatus);
router.get('/taskStatusCount', AuthVerifyMiddleware, taskStatusCount);

module.exports = router;