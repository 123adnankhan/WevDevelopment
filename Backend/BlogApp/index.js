
const express = require("express");
const app = express();

// Jo bhi env file ke andar configuration hai usko process object ke andar load karenge 

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE -> whenever you need to parse json body 
app.use(express.json());

// import routes 
const blog =require("./routes/blog");

// mount 
app.use("/api/v1", blog);



// Database connection 
const connectWithDb = require("./config/database");
connectWithDb();


//start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
})


app.get("/", (req,res) => {
    res.send(`<h1>This is my homePage baby</h1>`)
})