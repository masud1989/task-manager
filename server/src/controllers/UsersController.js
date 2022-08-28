const UsersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');

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

// User Login
exports.login = (req, res) => {
    let reqBody = req.body;
    UsersModel.aggregate(
        [
            {$match: reqBody},
            {$project: {_id:0, email:1, name:1, address:1, mobile:1, photo:1 } }
        ], (error, data) => {
        if(error){
            res.status(400).json({status: 'fail', data:error})
        }
        else{
            if(data.length > 0){
                let Payload = { exp: Math.floor(Date.now()/1000) + (24*36*36), data:data[0]['email'] }
                let token = jwt.sign(Payload, 'SecretKey123456789');
                res.status(200).json({ status: 'Success', token:token, data:data[0] })
            }
            else {
                res.status(401).json({ status: 'Unauthorized' })
            }
        }
    }
    )
}
