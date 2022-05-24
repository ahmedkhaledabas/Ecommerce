var express = require('express');
var router = express.Router();
const control = require('../controller/product_control');
const checkAuth = require('../middleware/check-auth');



//add product
router.post('/addProducts', control.addProducts);
 
//get products
router.get('/getProducts', control.getProducts);

//get one product by Id
router.get('/:id',  control.getoneProduct);

//update products
router.patch('/:id', checkAuth, control.updateProducts);

//delete products
router.delete('/deleteProducts', control.deleteProducts);

module.exports = router;