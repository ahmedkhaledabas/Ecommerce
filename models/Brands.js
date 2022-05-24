const mongoose = require('mongoose');
const brandsSchema = mongoose.Schema({
    brand_id: {
        type: Number,
        required: true
    },
    brand_name: {
        type: String,
        required: true
    },
    product : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Products"
    }]
    
});

module.exports = mongoose.model('Brands', brandsSchema);