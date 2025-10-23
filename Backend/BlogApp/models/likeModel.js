// import instance of mongoose 
const mongoose = require("mongoose") ;

// Define route handler -> here idea is to kis post pe like kar rahe , aur kon like kiya hai 
const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    },
    user:{
        type:String,
        required:true,
    },

});

// export 
// Here likeSchema is exported by like name 
module.exports = mongoose.model("Like",likeSchema);


// NOTE -> Agar ek model ke andar nested koi dusra model hai to id use karo 