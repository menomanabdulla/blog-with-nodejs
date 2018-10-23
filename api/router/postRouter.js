const router = require('express').Router();
const  postController = require('../controller/postController');


router.get('/',(req,res,next)=>{
    
});

router.post('/',postController.CreatePost);

router.get('/:id',(req,res,next)=>{

});

router.put('/:id',(req,res,next)=>{

});

router.patch('/:id',(req,res,next)=>{

});

router.delete('/:id',(req,res,next)=>{

});


module.exports = router;

