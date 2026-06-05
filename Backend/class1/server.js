const express = require('express');

const app = express();
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
app.use(express.json());

app.listen(5000,()=>{
    console.log("server started at port 5000") ;
})
app.get('/',(request,response)=>{
    response.send("hello g kaise h saare") ;
})
app.post('/api/cars',(req,res)=>{
    const {name,brand}=req.body ;
    console.log(name);
    console.log(brand);
    res.send("Car submitted succesfully");
})
// Establishing connection between mongodb server and express
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    // useNewurlParser:true,
    // useUnifiedTopology:true
})
.then(()=>{console.log("connection Successful")})
.catch((error)=>{console.log("Recieved an error")});

