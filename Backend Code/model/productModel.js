const mongoose = require('mongoose');

var productSchema= mongoose.Schema( {
    category_name: { type: String},
    product_name:{ type: String, required: true},
    pack_size:{ type: String, required: true},
    product_MRP:{ type: String, required: true},
    product_iamge:{ type: String, required: true},
    status:{ type: String, required: true}


})

module.exports=mongoose.model('products', productSchema);