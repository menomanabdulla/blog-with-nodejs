const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const config = require('../config/config')
const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 50
    },
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
    gravatarURL:{
        type: String,
        trim: true
    }
},{
    timestamps: true
});

userSchema.pre('save', function() {
    if(this.password){
        bcrypt.hash(this.password, config.SALT, function(err, hash) {
           if(err){
               return console.log(err)
           }
           console.log(hash)
           this.password = hash
        });
    }
    next()
  });

module.exports = mongoose.model('User',userSchema);