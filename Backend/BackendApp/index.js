// Importing framework of express.js OR creating instance of express
const express = require("express") ;
const app = express();

const port = 3000 ;

// Adding Middleware -> It is use to parse data from json body
app.use(express.json());

app.listen(port,()=>{
    console.log(`Server Started Successfully at ${port}`);
});
// defining default routes 

app.get('/',(req,res)=>{
    res.send(`<h1>This is my Homepage Baby </h1>`)
})
// Creating a Post request 
app.post('/car',(req,res)=>{
    res.send("Received a Post request") ;
})