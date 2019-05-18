var mongoose = require('mongoose');
var CourseSchema = new mongoose.Schema({
    name: String,
    teacherId: String,
    description: String,
    price: Number
});

mongoose.model('Course', CourseSchema);

module.exports = mongoose.model('Course');
