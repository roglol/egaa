var mongoose = require('mongoose');


var ProductsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email:   String,
    password: String
});

var Products = mongoose.model('Products', ProductsSchema);

module.exports = Products