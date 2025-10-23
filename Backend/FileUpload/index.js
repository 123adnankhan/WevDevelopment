// Server Instansiate 
const express = require('express');
const app = express();

// PORT find karna hai 
require('dotenv').config();
const PORT= process.env.PORT || 3000;

// middleware add karna hai 

app.use(express.json());

// Simple express middleware for uploading files onto the server 
// NOTE -> Data ko media server par upload karta hai cloudinary 

const fileUpload = require('express-fileupload');
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'

}));

// Establishing connection with database 

require('./config/database').connect();
// Establishing connection with clodinary 

const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();

// Mounting Routes
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);

// start the server 
app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`);
})

// default routes 
app.get('/',(req,res)=>{
    res.send(`<h1>This is my homepage baby </h1>`);
})
