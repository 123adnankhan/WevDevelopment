const express =require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000 ;


// cookie-parser -> What is this and why we need this ? 
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// add middleware to parse the data from json 
app.use(express.json());

// import the routes and mount 
const user = require('./routes/user');
app.use('/api/v1',user);

// connect with db 
require('./config/database').connect();
app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send(`<h1>This is my homepage baby </h1>`);
})