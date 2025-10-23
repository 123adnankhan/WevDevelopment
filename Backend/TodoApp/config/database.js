// creating instance of mongoose
const mongoose = require('mongoose');

require('dotenv').config();
const dbConnect =() => {
    // is process wale object ke andar database url ko use karne ke liye dotenv file install karo 
    mongoose.connect(process.env.DATABASE_URL,{
        // useNewUrlParser:true ,
        // useUnifiedTopology:true,
    })
    .then(()=>console.log("DB connection is successfull"))
    .catch((error)=>{
        console.log("Issue in DB connection");
        console.error(error.message);

        // what does process.exit(1);
        process.exit(1);
    });
}
module.exports=dbConnect;