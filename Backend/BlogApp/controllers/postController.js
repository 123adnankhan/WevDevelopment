const Post = require('../models/postModel');

exports.createPost = async (req,res)=>{
    try{
        // fetch the data from req body 
        const {title,body} =req.body ;

        // Creating post object 
        const post = new Post({
            title,body,
        });

        // save the post into the database 
        const savedPost = await post.save();

        res.json({
            post:savedPost,
        });
    }
    catch(error){
        return res.status(400)
        .json({
            error:"Error while creating Post ",
        });
    }
};
// Mjhe sari ke sari posts chhiye 
exports.getAllPosts =async (req,res)=>{
    try{
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        });
    }
    catch(error){
        res.status(400).json({
            error:"Error While Fetching Post "
        });
    }
};