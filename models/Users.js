var mongoose = require('mongoose');


var UsersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email:   String,
  password: String
});

var User = mongoose.model('Users', UsersSchema);

module.exports = User