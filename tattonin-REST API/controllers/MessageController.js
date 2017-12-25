var mongoose = require("mongoose");
var Message = require("../models/Message");

module.exports=
{
	// create message
 createMessage:function(req,res)
  {

   let message=new Message({name:req.body.name, email:req.body.email, content:req.body.content});
   message.save(function(err,message)
   	{
   		if(err)
   		{
   			console.log(err);
   		}
       console.log(message);
       res.json({message})
   	});

  },// ends createMessage

  // get all messages
  getMessages:function(req,res)
  {
  	Message.find({},function(err, messages)
  	{
     if(err)
     {
     	console.log(err);
     }
    res.json({messages});

  	});
  }, //ends getMessages

  // get message details
  messageDetails:function(req,res)
  {
    Message.findOne({"_id":req.params.id},function(err,message){
    	if(err)
    	{
    		console.log(err);
    	}
    	res.json({message});
    });
  }// ends messageDetails

}