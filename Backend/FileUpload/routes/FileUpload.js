const express = require('express');
const router = express.Router();

// Import the controller 

const {localFileUpload,imageUpload, videoUpload,imageSizeReducer}=require('../controllers/fileUpload');

router.post('/localFileUpload',localFileUpload);
router.post('/imageUpload',imageUpload);
router.post('/videoUpload',videoUpload);
router.post('/imageSizeReducer',imageSizeReducer);


// export the router
module.exports = router ;