import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    totalBooks: {
        type: Number,
        default: 0
    },
    addedBy : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        default: 0
    }
});

const AuthorModel = new mongoose.Model('authors', AuthorSchema);
module.exports = AuthorModel;