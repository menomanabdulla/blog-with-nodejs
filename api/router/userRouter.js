const router = require('express').Router();
const userController = require('../controller/userController')
//user route
router.post('/signup',userController.signUpUser);

router.post('/signin',(req,res,next)=>{
    
});

router.get('/',userController.FindAllUser);

router.get('/:id',(req,res,next)=>{
    
});

router.put('/:id',(req,res,next)=>{
    
});

router.patch('/:id',(req,res,next)=>{
    
});

module.exports = router;
