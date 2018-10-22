const userModule = require('../model/userModule');
var gravatar = require('gravatar');
const config = require('../config/config');
const signUpUser = ((req,res,next)=>{
    userModule.find({$or:[
        {email: req.body.email},
        {username: req.body.username}
    ]})
    .then(result=>{
        if(result.length> 0){
            res.json({
                msg: 'User already exist'
            });
        }else{
            const user = new userModule({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                gravatarURL: gravatar.url(req.body.email),
                password: req.body.password
            })
           return user.save()
        }
        
    })
    .then(user => {
        console.log(user)
        res.status(201).json({
            user:{
                username: user.username,
                email: user.email,
                gravatarURL: user.gravatarURL,
                url: `${config.baseURL}/${user._id}`
            }
        })
    })
    .catch(error=>{
        res.status(500).json({
            message: 'Server Error',
            error
        })
    })
})

const FindAllUser = ((req,res,next)=>{
    userModule.find()
        .then(users=>{
            if(users.length>0){
                res.status(201).json({
                    message: `Total ${users.length} user found`,
                    length: users.length,
                    users
                })
            }else{
                res.status(404).json({
                  message: 'There are no User'
                })
            }
           
        })
        .catch(error =>{
            res.json({
                message: 'Server Error with all-user found',
                error
            })
        })
})

module.exports = {
    signUpUser,
    FindAllUser
}