var express = require('express');
var router = express.Router();
const control = require('../controller/product_control');
const checkAuth = require('../middleware/check-auth');



//add product
router.post('/addProducts', control.addProducts);
 
//get products
router.get('/', checkAuth, control.getProducts);

//get one product by Id
router.get('/:id', checkAuth, control.getoneProduct);

//update products
router.patch('/:id', checkAuth, control.updateProducts);

//delete products
router.delete('/:id', checkAuth, control.deleteProducts);

module.exports = router;