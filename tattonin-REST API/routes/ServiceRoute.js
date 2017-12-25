var express = require('express');
var router = express.Router();
var serviceController = require("../controllers/ServiceController.js");

//to add a service
router.post('/addService',serviceController.addService);

// to get your nearest services
router.get('/nearestServices/:latitude/:longitude',serviceController.getNearestServices);

//to get all services
router.get('/services',serviceController.getServices);

//to get a single service
router.get('/singleService/:id',serviceController.getSingleService);

//to update a service
router.post('/update/:id',serviceController.updateService);

//to get a single service
router.get('/update/:id',serviceController.getSingleService);

//get nearest services by category
router.get('/nearestServicesByCategory/:lat/:lon/:cat', serviceController.getNearestServicesByCategory);

//delete service
router.delete('/service/delete',serviceController.deleteService);


module.exports = router;
