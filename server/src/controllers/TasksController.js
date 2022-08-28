const TasksModel = require("../models/tasksModel");

// Create Task
exports.createTask = (req, res) => {
    let reqBody = req.body;
    reqBody.email = req.headers['email'];

    TasksModel.create(reqBody, (error, data) => {
        if(error){
            res.status(400).json( {status: 'Create failed', data: error } )
        }
        else{
            res.status(200).json( {status: 'Create Success', data: data } )
        }
    })
}

// Delete Task
exports.deleteTask = (req, res) => {
    let id = req.params.id;
    let Query = {_id:id};

    TasksModel.remove(Query, (error, data) => {
        if(error){
            res.status(400).json( {status: 'Delete failed', data: error } )
        }
        else{
            res.status(200).json( {status: 'Delete Success', data: data } )
        }
    })
}

// Update Task Status 
exports.updateTaskStatus = (req, res) => {
    let id = req.params.id;
    let status = req.params.status;
    let Query = {_id:id};
    let reqBody = {status:status};

    TasksModel.updateOne(Query, reqBody, (error, data) => {
        if(error){
            res.status(400).json( {status: 'Update failed', data: error } )
        }
        else{
            res.status(200).json( {status: 'Update Success', data: data } )
        }
    })
}
