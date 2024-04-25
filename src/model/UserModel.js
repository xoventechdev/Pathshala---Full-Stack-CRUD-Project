const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    opt: {
        type: Number
    },
    roles: {
        type: Number,
        default: 2
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;