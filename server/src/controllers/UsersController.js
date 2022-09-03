const UsersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');

// User Registration 
exports.registration = (req, res) => {
    let reqBody = req.body;
    UsersModel.create(reqBody, (error, data) => {
        if(error){
            res.status(200).json({status: 'fail', data:error})
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

// User Profile Update
exports.profileUpdate = (req, res) => {
    let email = req.headers['email'];
    let reqBody = req.body;

    UsersModel.updateOne({email: email}, reqBody, (error, data) => {
        if(error){
            res.status(400).json({status: 'Update fail', data:error})
        }
        else{
            res.status(200).json({status: 'Update success', data:data})
        }
    })
}

//User Profile Details
exports.profileDetails = (req, res) => {
    let email = req.headers['email'];

    UsersModel.aggregate([
        {$match:{email:email}},
        {$project:{_id:1, email:1, name:1, address:1, mobile:1, photo:1 }}
    ], (err,data)=> {
        if(err){
            res.status(400).json({status:'Failed', data:err})
        }
        else{
            res.status(200).json({status:'Success', data:data})
        }
    })
}
