const express = require('express');
const app = express();
const config = require('./api/config/config')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

//router
const userRouter = require('./api/router/userRouter');
const postRouter = require('./api/router/postRouter');

//db connection
mongoose.Promise = global.Promise;
mongoose.connect(require('./api/config/db').dbURL,
{ useNewUrlParser: true })
.then(res => console.log(`DB Connected`))
.catch(err=>console.log('DB connection error', err))

//middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extends: true}));
app.use(bodyParser.json());
app.use('/api/user',userRouter);
app.use('/api/post',postRouter);


//error handaling
app.use((req,res,next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use((error,req,res,next)=>{
    res.status(error.status|| 500);
    res.json({
        error
    })
});

app.listen(config.PORT,()=>console.log(`Process run on ${config.PORT}`));
app.get('/',(req,res)=>res.send('Hello World'));

