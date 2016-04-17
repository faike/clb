var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Heading = new Schema({
	
    firstname : String,
    lastname : String,
    street : String,
    city : String,
    state : String,
    phone : String,
    email : String,
    toname: String,
    companyname : String,
    companyaddress : String,
    companycity : String,
    companystate : String,
    positionname : String,
    jobboardname : String,
    yearsofexperience : String,
    industry : String,
    jobtitles : [String],
    companys: [String],
    responsibilities: [String]

});

module.exports = mongoose.model('Heading', Heading);