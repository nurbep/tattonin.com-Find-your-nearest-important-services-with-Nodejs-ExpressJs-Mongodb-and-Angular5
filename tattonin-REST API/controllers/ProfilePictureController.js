var formidable = require('formidable');
var userController=require('./UserController');
var User = require("../models/User");
var fs=require('fs');
var path = require('path');
module.exports={
 uploadImage:function(req,res)
 {
   imagepath="";
   User.findOne({"_id":req.params.id},function(err,user){
   if(err)
   res.send({err});
   var form = new formidable.IncomingForm();
   form.parse(req, function (err, fields, files) {
     var oldpath = files.filetoupload.path;
     console.log(files);
     //console.log(fields);
     var newpath = 'C:/Users/Nayan/Desktop/tattonin/images/'+user._id+files.filetoupload.name;
     imagepath=newpath;
     
     fs.rename(oldpath, newpath, function (err) {
       if (err) throw err;
       //update user image
       let operators={$set:{"imagepath":imagepath}};
       User.update({_id:req.params.id},operators,function(err,user){
       console.log("update data:"+user);
        // res.redirect('/locations');
        //res.send({user});
        console.log(user);
        req.session.imagepath="";
       });
      
       res.write('File uploaded and moved!');
       res.end();
     });
   });


   });//ends findOne
 },//ends uploadImage

   
getUploadForm:function(req,res)
  {
 User.findOne({"_id":req.params.id},(err,user)=>
 {
    //console.log(user);
    res.render("fileUpload.ejs",{user:user});
  });
//res.render('fileUpload.ejs');

  }

 }

    