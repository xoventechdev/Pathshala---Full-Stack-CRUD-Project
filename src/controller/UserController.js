const { response } = require('../../app');
const UserModel = require('../model/UserModel');
const bcrypt  = require('bcrypt');
const JWT = require('jsonwebtoken');
const { SendEmail } = require('../utility/EmailHelper');

exports.UserRegister = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if (name==null && email==null && password==null){
            return res.json({status:'warning', response: 'All fields are required'}); 
        }
        const existing = await UserModel.find({email: email})
        if (existing.length > 0){
            return res.json({status:'warning', response: `Another user already exists with ${email}`}); 
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await UserModel.create({name:name,email:email,password:hashedPassword});
        res.json({status:'success', response: 'User Registration successfully'});
    } catch (error) {
        res.json({status:'error', response: error.message});
    }
}

exports.UserLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (email==null && password==null){
            return res.json({status:'warning', response: 'All fields are required'}); 
        }
        const existing = await UserModel.find({email: email});
        if (existing.length == 0){
            return res.json({status:'warning', response: `User does not exist with ${email}`}); 
        }
        const matchPassword = await bcrypt.compare(password, existing.password);
        if (!matchPassword){
            return res.json({status:'warning', response: `Password does not match`}); 
        }
        const token = JWT.sign({
            email: email,
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 8),
        }, 'joy@bangla');
        res.json({status:'success', response: 'User Login successfully', userInfo: {token: token, email: email}});
    } catch (error) {
        res.json({status:'error', response: error.message});
    }
}


exports.OTPRequest = async (req, res) =>{
    try {
        const {email} = req.body;
        if (email==null){
            return res.json({status:'warning', response: 'All fields are required'}); 
        }
        const existing = await UserModel.find({email: email});
        if (existing.length == 0){
            return res.json({status:'warning', response: `User does not exist with ${email}`}); 
        }
        const otpGenerate = Math.round(Math.random() * (999999 - 100000 +1)) + 100000;
        const updateOTP = await UserModel.update({email: email},{opt: otpGenerate});
        if(!updateOTP){
            return res.json({status:'warning', response: `OTP generation failed. Try again later`});
        }
        await SendEmail(email,'OTP request for password reset', otpGenerate)
        res.json({status:'success', response: `OTP request successful. Check your email at ${email}`});
    } catch (error) {
        res.json({status:'error', response: error.message});
    }
}


exports.OTPVerified = async (req, res) => {
    try {
        const {email, otp} = req.body;
        if (email==null && otp==null){
            return res.json({status:'warning', response: 'All fields are required'}); 
        }
        const existing = await UserModel.find({email: email});
        if (existing.length == 0){
            return res.json({status:'warning', response: `User does not exist with ${email}`}); 
        }
        const matchOTP = await UserModel.find({email: email, opt: otp});
        if (matchOTP.length == 0){
            return res.json({status:'warning', response: `OTP does not match`}); 
        }
        res.json({status:'success', response: 'Your OTP has been verified. Please reset your password.'});
    } catch (error) {
        res.json({status:'error', response: error.message});
    }
}


exports.ResetPassword = async (req, res) =>{
    try {
        const {email, password} = req.body;
        if (email==null && password==null){
            return res.json({status:'warning', response: 'All fields are required'}); 
        }
        const existing = await UserModel.find({email: email});
        if (existing.length == 0){
            return res.json({status:'warning', response: `User does not exist with ${email}`}); 
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const updatePassword = await UserModel.update({email: email},{password:hashedPassword});
        if(!updatePassword){
            return res.json({status:'warning', response: `Password reset failed. Try again later`});
        }
        await SendEmail(email,'Password reset successful', 'Your password has been reset successfully.')
        res.json({status: 'success', response: 'Your password has been reset successfully.'})
    } catch (error) {
        res.json({status:'error', response: error.message});
    }
}


exports.UpdateProfile = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, email, password} = req.body;
        if (name==null && email==null && password==null){
            return res.json({status:'warning', response: 'All fields are required'}); 
        }
        const existing = await UserModel.find({email: email})
        if (existing.length > 0){
            return res.json({status:'warning', response: `Another user already using this ${email}`}); 
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await UserModel.updateOne({_id:id},{name:name,email:email,password:hashedPassword});
        res.json({status:'success', response: 'User profile successfully'});
    } catch (error) {
        res.json({status:'error', response: error.message});
    }
}

exports.UpdateProfileByAdmin = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, email, password, isAdmin, isActive} = req.body;
        if (name==null && email==null && password==null){
            return res.json({status:'warning', response: 'All fields are required'}); 
        }
        const existing = await UserModel.find({email: email})
        if (existing.length > 0){
            return res.json({status:'warning', response: `Another user already using this ${email}`}); 
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await UserModel.updateOne({_id: id},{name:name,email:email,password:hashedPassword, isAdmin:isAdmin, isActive:isActive});
        res.json({status:'success', response: 'User profile successfully'});
    } catch (error) {
        res.json({status:'error', response: error.message});
    }
}


exports.ReadUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json({status:'success', response: users});
    } catch (error) {
        res.json({status:'error', response: error.message});
    }
}

exports.ReadUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await UserModel.findById(id);
        res.json({status:'success', response: user});
    } catch (error) {
        res.json({status:'error', response: error.message});
    }
}