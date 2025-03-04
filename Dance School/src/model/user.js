var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');


var UserSchema = new mongoose.Schema({
    name: String,
    surname: String,
    role:{
        type: String,
        enum: ['teacher', 'student'],
        default: 'student'
        },
    username: String,
    hash: String,
    salt: String,
});

UserSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};
  
UserSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};
  
UserSchema.methods.generateJWT = function() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
  
    return jwt.sign({
      username: this.username,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
}
  
UserSchema.methods.toAuthJSON = function() {
    return {
      _id: this._id,
      username: this.username,
      role: this.role,
      name:this.name,
      surname:this.surname,
      token: this.generateJWT(),
    };
};
  

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
