const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userId:{
        type: mongoose.Schema.types.ObjectId,
        ref: 'User'
    },
    postId:{
        type: mongoose.Schema.types.ObjectId,
        ref: 'Post'
    },
    body:{
        type: String,
        trim: true,
        maxlength: 3000
    }
},{timestamps: true});



module.exports = mongoose.model("Comment",commentSchema) 