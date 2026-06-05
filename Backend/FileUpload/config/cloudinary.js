// Establishing Connection with the database 

const cloudinary = require('cloudinary').v2;
exports.cloudinaryConnect=()=>{
    // Connection establishment using cloudinary cofig method 

    // 3 things required 1-> Cloud Name .. 2-> API Key ... 3-> API Secret ...
    try{
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET
        })
    }
    catch(error){
        console.log(error);
    }
}