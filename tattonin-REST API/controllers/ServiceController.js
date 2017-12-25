var Service = require('../models/Service');
const RX=require('@reactivex/rxjs');
module.exports={
 addService:function(req,res){

  var coords = new Array(Number(req.body.longitude),Number(req.body.latitude));
  var service=new Service({
    name: req.body.name,
    category: req.body.category,
    coord:coords,
    address:req.body.address,
    district:req.body.district,
    mobile:req.body.mobile,
    telephone:req.body.telephone
     
   }); 
  service.save(function(err,data){

    console.log(data);
    res.send({success:"Successfully added."});
  });

 },//ends addService
getServices:function(req,res){
  RX.Observable.from(Service.find({})).subscribe(function(services){

  res.send({services});
 });

},//ends getServices

getNearestServices:function(req,res){

   var loc = new Array(Number(req.params.longitude),Number(req.params.latitude));
   RX.Observable.from(Service.find({coord:{$near:loc}}).limit(15)).subscribe(function(services){
   res.send({services});
   console.log(services);
 });
},//ends getNearestServices

updateService:function(req,res){
  Service.findOne({_id:req.params.id},function(err,service){

    let operators={$set:{"name":req.body.name,"category":req.body.category,"address":req.body.address,"district":req.body.district,"mobile":req.body.mobile,"telephone":req.body.telephone}};
    Service.update({_id:req.params.id},operators,function(err,updatedService){
    console.log("update data:"+updatedService);
     // res.redirect('/locations');
     res.send({updatedService});
    });
  });//ends findone

},//ends update

deleteService:function(req,res){
 Service.remove({_id:req.params.id},function(err,data){
  res.redirect('/locations');
 });//ends deleteService

},//ends delete
getSingleService:function(req,res){
   Service.findOne({_id:req.params.id},function(err,service){
      console.log(service);
      res.send({service});
    });

},//ends getSingleService

getNearestServicesByCategory:function(req,res){

    var loc = new Array(Number(req.params.lon),Number(req.params.lat));
    RX.Observable.from(Service.find({"category":req.params.cat,coord:{$near:loc}}).limit(15)).subscribe(function(services){
    res.send({services});
    console.log(services);
 });
}//ends 



}//ends module.exports
