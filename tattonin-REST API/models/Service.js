var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var serviceSchema = new Schema({
      name: String,
      category : String,
      coord:[Number],
      address:String,
      district:String,
      mobile:Number,
      telephone:Number
       });

serviceSchema.index( {coord:"2d"} )
module.exports = mongoose.model('Service', serviceSchema);
