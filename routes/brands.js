var express = require('express');
var router = express.Router();
const control = require('../controller/brandsController');




//add brand
router.post('/addBrands', control.addBrands);
 
//get brand
router.get('/getBrands', control.getBrands);


//update brand
router.patch('/updateBrands:id', control.updateBrands);

//delete brand
router.delete('/deleteBrands:id', control.deleteBrands);

module.exports = router;