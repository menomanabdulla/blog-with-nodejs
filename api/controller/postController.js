const postModel = require('../model/postModule');
const userModule = require('../model/userModule');
const config = require('../config/config');

const CreatePost = ((req,res,next)=>{
    /*userModule.findById({_id : `${res.locals._id}`})
    .then(validUser=>{
        console.log(validUser);
    })*/
    console.log("Route is working");
    const post = new postModel({
        title: req.body.title,
        featureImageURL: req.body.featureImageURL,
        content: req.body.content,
        tags: req.body.tags,
    })
    post.save();
})

module.exports={
    CreatePost
}