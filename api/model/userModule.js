const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        required: true,
        unique: true,
        trim: true,
        maxlength: 30,
        type: String
    },
    email:{
        required: true,
        unique: true,
        trim: true,
        type: String
    },
    password:{
        type: String,
        required: true
    },
    lastLogin:{
        type: Date
    },
    avatarURL:{
        type: String,
        trim: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('User',userSchema);