var express = require('express');
var router = express.Router();
var logger= require('../utils/logger.js');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://127.0.0.1:27017/customer');

var contactSchema = mongoose.Schema({
	'first_name': 'string',
	'last_name': 'string',
	'phone':  'string',
	'address_line_1': 'string',
	'address_line_2': 'string',
	'county' : 'string',
	'postcode':  'string'
});

var Contact = mongoose.model('Contact', contactSchema);

router.get('/', function(req, res){
	
	Contact.find(function(err, contacts){
		if(err){
			res.json({"error":true});
		}else{
			res.json(contacts);
		}	
	});
	
});

router.post('/', function(req, res){
	
	logger.info('Inserting Data to mongodb');
	
	var reqContact = req.body;
	
	var contact = new Contact({	
		first_name:reqContact.first_name,
		last_name:reqContact.last_name,
		phone: reqContact.phone,
		address_line_1: reqContact.address_line_1,
		address_line_2: reqContact.address_line_2,
		county: reqContact.county,
		postcode: reqContact.postcode
	});
	
	var resMsg = {"success":true};
	
	contact.save(function(err, c){
		if (err){
			resMsg = {"error":true};
			logger.error(err);
		} 
	});
	
	res.json(resMsg);
	
});

module.exports = router;