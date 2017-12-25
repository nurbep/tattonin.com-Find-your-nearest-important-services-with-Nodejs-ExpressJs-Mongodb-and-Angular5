var mongoose = require("mongoose");
var User = require("../models/User");

module.exports={
    getSingleUser:function(req,res){
        Service.findOne({_id:req.params.id},function(err,user){
           console.log(user);
           res.send({user});
         });
     
     }, // ends findOne

     updateUser:function(req,res){
        User.findOne({_id:req.params.id},function(err,user){
          let operators={$set:{"name":req.body.name}};
          User.update({_id:req.params.id},operators,function(err,updatedUser){
          console.log("update data:"+updatedUser);
           res.send({updatedUser});
          });
        });//ends findone
      
      },//ends update

      EditProfilePicture:function(req,res){
        User.findOne({_id:req.params.id},function(err,user){
          let operators={$set:{"name":req.body.name,"imagepath":req.session.imagepath}};
          User.update({_id:req.params.id},operators,function(err,user){
          console.log("update data:"+user);
           // res.redirect('/locations');
           res.send({user});
           req.session.imagepath="";
          });
        });//ends findone
      
      },//ends Edit


}// ends module.exports