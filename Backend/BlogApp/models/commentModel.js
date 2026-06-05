// Import Mongoose Instance 

const mongoose = require('mongoose') ;

// Define Route handler 
const commentSchema = new mongoose.Schema({
    // kis post pe comment  kiya hai -> as post is itself a model so good practice is to refer its id and give reference to model
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",// reference to the post model 
    } ,
    // Kis user ne comment kiya hai 
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
});

// export 
// Here commentSchema is exported by the name of comment 
module.exports = mongoose.model("Comment",commentSchema);

// NOTE -> Agar ek model ke andar nested koi dusra model hai to id use karo 