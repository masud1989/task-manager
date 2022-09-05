const mongoose = require('mongoose');

const OTPSchema = mongoose.Schema({
    email:{type:String},
    otp:{type:String},
    status:{type:Number},
    createdDate:{type:Date, default:Date.now()}
},{versionKey:false})

const OTPModel = mongoose.model('otps', OTPSchema);
module.exports = OTPModel;