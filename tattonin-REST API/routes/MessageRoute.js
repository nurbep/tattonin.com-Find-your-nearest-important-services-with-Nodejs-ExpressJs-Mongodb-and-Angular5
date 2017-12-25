var express = require('express');
var router = express.Router();
var messageController = require("../controllers/MessageController.js");

//to add a message
router.post('/createMessage',messageController.createMessage);

//to get all messages
router.get('/messages',messageController.getMessages);

//to get a single message details
router.get('/messageDetails/:id',messageController.messageDetails);



module.exports = router;
