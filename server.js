const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//db connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://nomanabdulla:dbpass123321dbpass@ds135433.mlab.com:35433/rest-blog', { useNewUrlParser: true })
.then(res => console.log(`DB Connected`))
.catch(err=>console.log('DB connection error', err))

//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extends: true}));
app.use(bodyParser.json());



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

app.listen(PORT,()=>console.log(`Process run on ${PORT}`));
app.get('/',(req,res)=>res.send('Hello World'));

