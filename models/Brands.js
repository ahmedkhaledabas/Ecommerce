const mongoose = require('mongoose');
const brandsSchema = mongoose.Schema({
    brand_id: {
        type: Number,
        required: true
    },
    brand_name: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Brands', brandsSchema);