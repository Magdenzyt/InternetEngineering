var mongoose = require('mongoose');
var AnnouncementSchema = new mongoose.Schema({
    teacherId: String,
    text: String,
    date: Date
});

mongoose.model('Announcement', AnnouncementSchema);

module.exports = mongoose.model('Announcement');
