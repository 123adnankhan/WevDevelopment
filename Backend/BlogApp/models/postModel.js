// import mongoose instance 
const mongoose = require("mongoose");

// Define your route handler 

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like",
        }
    ] ,
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }]
});

// export
module.exports =mongoose.model("Post",postSchema);


// NOTE -> Agar ek model ke andar nested koi dusra model hai to id use karo 