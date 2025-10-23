// Auth wala middleware hai uska role hai check karna ki authenticated user hai 
const jwt = require('jsonwebtoken');
require("dotenv").config();

exports.auth = (req,res,next)=>{
    try{

        // extract jwt token 
        // NOTE -> There are three ways to find out token 
        // 1. req.body se ... 2-> header me se ... 3 -> cookies me se
        
        // console.log("cookie",req.cookies.token);
        // console.log("body",req.body.token);
        
         const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");

        // if token is not present 

        if(!token){
            return res.status(401).json({
                success:false, 
                message:"Token Missing"
            });
        }

        // verify the token -> so that we can check authenticated user 

        try{
           const decode = jwt.verify(token,process.env.JWT_SECRET);

           // Storing the payload in req.user 
           req.user = decode;
        } catch(error){
            return res.status(401).json({
                success:false ,
                message:"token is invalid "
            });
        }
        next();
    } 
    catch(error){
        return res.status(401).json({
            success:false ,
            message:"Something went wrong while verifying the token "
        })
    }
}

// These middleware are used for authorization 

exports.isStudent =(req,res,next)=>{
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false ,
                message:"This is a protected route for student ",
            })
        }
        // For moving to the next middleware 
        next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User role is not matching ",
        });
    }
}

exports.isAdmin = (req,res,next)=>{
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for admins"
            });
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User role is not matching ",
        });
    }
}

