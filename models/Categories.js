var mongoose = require('mongoose');


var CategoriesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:  String,
});

var Categories = mongoose.model('Categories', CategoriesSchema);

module.exports = Categories