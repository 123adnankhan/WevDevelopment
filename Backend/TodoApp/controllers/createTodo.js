// // if you want to create todo object then you have to use todo schema 
// // importing todo schema 

// const Todo = require('..models/Todo');

// // define route handler 
// exports.createTodo = async(req,res)=>{
//     try{
//         // extract title and description from req body

//         const {title,description}=req.body ;

//         // create a new todo object and insert in DB 
//         const response = await Todo.create({title,description});

//         // send json response with a success flag 

//         res.status(200).json(
//             {
//                 success:true ,
//                 data : response,
//                 message:"Entry created successfully "
//             }
//         );
//     }
//     catch(err){
//         console.error(err);
//         console.log(err);
//         res.status(500).json(
//             {
//                 success:false ,
//                 data:"Internal Server error",
//                 message:err.message,
//             }
//         )
//     }
// }
//import th model
const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async(req,res) => {
    try {
            //extract title and description from reauest body
            const {title,description} = req.body;
            //create a new Todo Obj and insert in DB
            const response = await Todo.create({title,description});
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Created Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}