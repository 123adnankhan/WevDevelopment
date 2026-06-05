const express = require("express");
const app = express();

// load config from env file 
// JO bhi file config ke andar hai wo sab load ho jayengi process object ke andar 
require("dotenv").config();
const PORT = process.env.PORT || 4000 ;

// middleware to parse json request body 
app.use(express.json());

// import routes for TODO API 
const todoRoutes =require("./routes/todos");

// mount the todo API routes 
app.use("/api/v1",todoRoutes);

// start server 
app.listen(PORT , ()=>{
    console.log(`Server started at successfully at ${PORT}`);
});

// connect to the database 
const dbConnect = require("./config/database");
dbConnect();

// default route 

app.get("/",(req,res)=>{
    res.send(`<h1> this is HOMEPAGE body </h1>`);
})
