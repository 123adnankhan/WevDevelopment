// import model 
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// Business Logic 
exports.createComment = async (req,res)=>{
    try{
        // entry created using save function ->But make sure you have already taken comment object 

        // Fetching the data 
        const {post, user, body} = req.body;
        // create a comment object
        const comment = new Comment({
            post,user,body
        });


        //  save the new comment into the database 
       const savedComment = await comment.save();

        // find the post by ID , add the new comment to its comments  array 
        // PUSH -> It is use to add new entry 
        // PULL -> It is use to remove a entry
        
        // Exp -> is post wale id ke help se Post object ko fetch karke lao aur ye hogya findBYId ka kaam , uske baad new entry karni 
        // hai to push operator ka use hua phir comments wale array ke andar jaka savedComments ki id save kar do 


        // {new:true} -> iska mtlb hai jo bhi post return karna wo updated wali return karna 
        const udpatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id} }, {new: true}  )
                            .populate("comments") //populate the comments array with comment documents
                            .exec();

        res.json({
            post: udpatedPost,
        });

    }
     catch(error) {
        return res.status(500).json({
            error: "Error While Creating comment" ,
        });
    }

}