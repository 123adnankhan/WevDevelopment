const express = require("express");
const router = express.Router();

const User = require("../models/User");

// Import Controller 
const {signup,login} = require("../controllers/Auth");
const {auth,isStudent,isAdmin}=require("../middlewares/auth");

// Mapping path to controller 
router.post('/signup',signup);
router.post('/login',login);

// Protected Routes -> jiske pass role hoga sirf wahi access kar payega 
// Jisko jo role assign hai sirf wahi assign ha 

// testing protected routes for single middleware 
router.get('/test',auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected routes for TESTS ",
    });
});

router.get('/student',auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for students ",
    });
});


router.get('/admin',auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for Admin ",
    });
});
module.exports = router ;
