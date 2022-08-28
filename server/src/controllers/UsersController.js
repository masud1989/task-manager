const UsersModel = require('../models/usersModel');

// User Registration 
exports.registration = (req, res) => {
    let reqBody = req.body;
    UsersModel.create(reqBody, (error, data) => {
        if(error){
            res.status(400).json({status: 'fail', data:error})
        }
        else{
            res.status(200).json({status: 'success', data:data})
        }
    })
}
