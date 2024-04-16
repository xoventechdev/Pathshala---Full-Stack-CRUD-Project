const UserModel = require('../model/UserModel');
const bcrypt  = require('bcrypt');

exports.UserRegister = async (req, res) => {

    try {
        const {name, email, password} = req.body;
        if (name==null && email==null && password==null){
            return res.json({status:'warning', message: 'All fields are required'}); 
        }

        
        await UserModel.create({name:name,email:email,password:password});
        res.json({status:'success', message: 'User Registation successfully'});
    } catch (error) {
        res.json({status:'error', message: error.message});
    }

}