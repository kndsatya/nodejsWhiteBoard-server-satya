module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'white-board';
    let connectionString =
        'mongodb://heroku_9f6r9sp8:2jbj9c66manfoa2of74khebtet@ds047075.mlab.com:47075/heroku_9f6r9sp8';
    mongoose.connect(connectionString);
};