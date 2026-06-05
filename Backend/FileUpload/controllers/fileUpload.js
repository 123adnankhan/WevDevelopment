const File = require('../models/File');
const cloudinary = require('cloudinary').v2;
// localFileUpload->handler function 
// client ke pc se data lekar server ke path par store karega 

exports.localFileUpload = async (req,res)=>{
    try{
        // by using this heirarchy -> we can fetch the file 

        const file = req.files.file;
        console.log('file ayegi jee', file);

        // kis path par file ko store karna chate ho 
        //__dirname -> denotes current working directory 
        let path = __dirname +"/files/"+ Date.now() + `.${file.name.split('.')[1]}`;
        console.log('PATH ->',path);

        file.mv(path , (err)=>{
            console.log(err);
        })

        res.json({
            success:true,
            message:"Local file uploaded successfully ",
        })
    }
    catch(error){
        console.log(error);
    }
}
 
// Image upload ka handler 

function isFileTypeSupported(type,supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file,folder,quality){
    const options = {
         folder ,
         resource_type: "auto",
    };
    
    return await cloudinary.uploader.upload(file.tempFilePath,options);
    if(quality){
        options.quality = quality
    }
}
// Uploading image onto the cloudinary server 
exports.imageUpload = async (req,res)=>{
    try{
        // data fetch 
        const {name,tags,email}=req.body;
        console.log(name,tags,email);

        // fetch the files 
        const file = req.files.imageFile;
        console.log(file);

        // Perform Validation 

        const supportedTypes = ['jpg','jpeg','png'];
        const fileType = file.name.split(".")[1].toLowerCase();

        console.log('File Type',fileType);
        // file format not supported

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"File format not Supported"
            })
        }

        // file format supported hai 
        const response = await uploadFileToCloudinary(file,"adnan");
        console.log(response);
        // save entry onto the database 

        const fileData = await File.create({
            name,
            tags,
            url:response.secure_url,
            email
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            image:"Image Succesfully uploaded "
        })
    }
    catch(error){
       console.error(error);
       res.status(400).json({
        success:false,
        message:"Something Went Wrong "
       }) 
    }
}

// video upload ka handler 

exports.videoUpload = async (req,res)=>{
    try{
        // fetch the data 
        const {name,tags,email}=req.body;

        // fetch the files 
        const file =req.files.videoFile;

        // Validation 
        const supportedTypes=['mp4','mov'];
        const fileType=file.name.split('.')[1].toLowerCase();
        console.log("File Type",fileType);

        // file format not supported 
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:"File format not supported "
            })
        }
        // file format supported hai 
        console.log("Uploading to adnan");
        const response = await uploadFileToCloudinary(file,'adnan');
        console.log(response);

        // save entry into the database 
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"Video successfully uploaded "
        })

    }
    catch(error){
        console.error(error);
        res.status(400).json({
            success:false ,
            message:"Something went wrong "
        })
    }
}

// image Reducer ka handler 
exports.imageSizeReducer = async (req, res) => {
    try {
        //data fetch
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        //Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log("File Type:", fileType);

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File format not supported",
            });
        }

        //file format and size are supported
        console.log("Uploading to Cloudinary");

        //COMPRESS using width and height - options = {width: 800, height: 600}
        //compressing using quality property of options objects
        const response = await uploadFileToCloudinary(file, "adnan", 80);
        console.log(response);

        // Saving Entry in DB
        const fileData = await File.create({
            name,
            tags,
            email,
            url: response.secure_url,
        });

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image Successfully Uploaded",
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
}