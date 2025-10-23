const mongoose = require("mongoose");

// Jo Bhi env file ke andar configuration hai usko load kardega process object ke andar 

require("dotenv").config();


// Making connection of mongodb database with node or express and this will return a promise
const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Facing Connection Issues");
        console.log(error);
        process.exit(1);
    } ) 
};


module.exports = connectWithDb;
