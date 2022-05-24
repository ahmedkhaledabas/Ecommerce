const mongoose = require ('mongoose');
const Brands = require('../models/Brands');


addBrands = function (req, res, next) {
    const brand = new Brands({
        // _id : mongoose.Types.ObjectId,
        brand_id : req.body.brand_id,
        brand_name: req.body.brand_name
    });
    brand.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'Brand Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'Brand Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

getBrands = function (req, res, next) {
    Brands.find().then(resault => {
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


updateBrands = function (req, res, next) {
    const newBrand = {
        // _id : mongoose.Types.ObjectId(),
        brand_id : req.body.brand_id,
        brand_name: req.body.brand_name
    }
    Brands.updateOne({ _id: req.params.id }, { $set: newBrand }).
        then(resault => {
            res.status(200).json({
                massage: 'Brand updated Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

deleteBrands = function (req, res, next) {
    Brands.deleteOne({ _id: req.params.id }).
        then(resault => {
            res.status(200).json({
                massage: 'Brand deleted Successfully',
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
    addBrands: addBrands,
    getBrands: getBrands,
    updateBrands: updateBrands,
    deleteBrands: deleteBrands
}