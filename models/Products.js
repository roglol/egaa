var mongoose = require('mongoose');


var ProductsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:  String,
    price: Number,
    oldPrice: Number,
    images: [],
    description:String,
    category: String
});

var Products = mongoose.model('Products', ProductsSchema);

module.exports = Products