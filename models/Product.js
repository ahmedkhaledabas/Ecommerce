const mongoose = require('mongoose');
const productsSchema = mongoose.Schema({
    
    productId : {
        type : Number,
        require : true
    },
    productname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
    // },
    // category : {
    //     // type : Array,
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Category',
    // },
    // brands : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     // type : Array,
    //     ref: 'Brands',
    // }
});

module.exports = mongoose.model('Products', productsSchema);