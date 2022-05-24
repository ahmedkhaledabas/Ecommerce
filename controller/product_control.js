const Products = require('../models/Product');


addProducts = function (req, res, next) {
    const product = new Products({
        productId: req.body.productId,
        // _id : mongoose.Types.ObjectId,
        productname: req.body.productname,
        price: req.body.price,
        quantity: req.body.quantity,
    });
    product.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'Product Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'Product Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

getProducts = function (req, res, next) {
    Products.find().
        select('productId productname price quantity ').
        then(resault => {
            res.status(200).json({
                massage: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

getoneProduct = function(req, res, next) {
    Products.find({ _id: req.params.id }).
        select('productId productname price quantity').
        then(resault => {
            res.status(200).json({
                massage: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

updateProducts = function (req, res, next) {
    const newProduct = {
        productId: req.body.productId,
        productname: req.body.productname,
        price: req.body.price,
        quantity: req.body.quantity,
    }
    Products.updateOne({ _id: req.params.id }, { $set: newProduct }).
        then(resault => {
            res.status(200).json({
                massage: 'Product updated Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

deleteProducts = function (req, res, next) {
    Products.deleteOne({ _id: req.params.id }).
        then(resault => {
            res.status(200).json({
                massage: 'Product deleted Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

module.exports = {
    addProducts: addProducts,
    getProducts: getProducts,
    getoneProduct: getoneProduct,
    updateProducts: updateProducts,
    deleteProducts: deleteProducts
}