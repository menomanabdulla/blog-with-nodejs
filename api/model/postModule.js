const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        required: true,
        type: String,
        trim: true,
        maxlength: 100
    },
    featureImageURL:{
        trim: true,
        type: String
    },
    content:{
        required: true,
        type: String,
        trim: true,
        maxlength: 5000
    },
    tags:[
        {
            type: String,
            trim: true
        }
    ],
    totalShare:{
        facebook: Number,
        twiteer: Number,
        googlePluse: Number,
        linkeDin: Number
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [
        {
            type:  Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},{timestamps: true});

module.exports = mongoose.model("Post",PostSchema);