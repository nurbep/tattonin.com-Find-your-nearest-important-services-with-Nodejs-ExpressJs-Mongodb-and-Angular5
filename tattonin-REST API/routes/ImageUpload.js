var express = require('express');
var router = express.Router();
var imageUpload = require("../controllers/ProfilePictureController");

//to upload image
router.post('/upload/upload/upload/:id',imageUpload.uploadImage);

//to get form
router.get('/upload/:id',imageUpload.getUploadForm);

module.exports = router;
