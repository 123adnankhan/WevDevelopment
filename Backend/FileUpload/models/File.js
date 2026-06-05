const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type:String
    },
    tags:{
        type:String,
    },
    email:{
        type:String
    }
})

// post middleware 
//Our target is when we have entry in the database ,we want to apply post middleware for sending mail 

fileSchema.post("save",async function(doc){
    try{
        console.log("DOC",doc)

        // connecting to nodemailer
        const transporter = nodemailer.connect();

        // send mail 
        let info = await transporter.sendMail({
            from:"andy",
            to:doc.email,
            subject:"New file uploaded on cloudinary ",
            html:`<h2>Hello Jecc</h2> <p>File Uploaded</p>`
        })

        console.log(info);
    } 
    catch(error){
        console.error(error);
    }
})


const File = mongoose.model("File",fileSchema);
module.exports= File;