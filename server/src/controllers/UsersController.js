const UsersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');
const SendEmailUtility = require('../utilities/SendEmailUtility');


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

exports.recoverVerifyEmail = async (req,res) => {
    let email = req.params.email;
    let OTPCode = Math.floor(100000 + Math.random() * 900000)
    try {
        //Email Account verify
        let userCount = (await UsersModel.aggregate([{$match:{email: email}}, {$count: "total"}]))
        if(userCount.length>0){
            //OTP Insert
            let createOTP = await OTPModel.create({email: email, otp:OTPCode})
            let sendMail = await SendEmailUtility(email, "Your PIN Code is="+OTPCode, "Task Manager PIN Verification")
            //Email Send
            res.status(200).json({status:'Success', data:sendMail})
        }
        else{
            res.status(200).json({status: 'fail', data:'User is Not Found'})
        }



    
    } catch (error) {
        res.status(200).json({status: 'fail', data:error})
    }
    
}
