var mongoose = require('mongoose');
var config = require('../config');
var uniqueValidator = require('mongoose-unique-validator');

var connection = mongoose.connect(`mongodb://${config.DB_HOST}:${config.DB_PORT}/bsdb`, { useNewUrlParser: true }, 
function(err, db) {
    if (err) console.log('err connect to mongodb');
    console.log('connect to database successed');
});


module.exports = {
    mongoose,
    connection,
    uniqueValidator
};