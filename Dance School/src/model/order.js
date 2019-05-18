var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
    courseId: String,
    studentId: String
});

mongoose.model('Order', OrderSchema);

module.exports = mongoose.model('Order');