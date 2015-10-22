var config = require('./config.js');
var logger= require('winston');
logger.add(logger.transports.File, {filename: config.log_file_location});

logger.info('Configured logger');

module.exports = logger;