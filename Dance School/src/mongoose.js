var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/DanceSchool');

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection eror:'));

module.exports = mongoose