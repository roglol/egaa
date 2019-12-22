var mongoose = require('mongoose');


var UsersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name:  String, 
  surname: String,
  email:   String,
  personalNumber: Number,
  phoneNumber: Number,
  password: String
});

var User = mongoose.model('Users', UsersSchema);

module.exports = User