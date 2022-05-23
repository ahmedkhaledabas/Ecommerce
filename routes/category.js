var express = require('express');
var router = express.Router();
const control = require('../controller/categoryController');




//add category
router.post('/addCategory',  control.addCategory);
 
//get category
router.get('/getCategory', control.getCategory);


//update category
router.patch('/updateCategory:id', control.updateCategory);

//delete category
router.delete('/deleteCategory:id', control.deleteCategory);

module.exports = router;