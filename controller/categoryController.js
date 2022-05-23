const Category = require('../models/Category');


addCategory = function (req, res, next) {
    const category = new Category({
        category_id : req.body.category_id,
        category_name: req.body.category_name

    
    });
    category.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'Category Added Successfully',
                    resault: resault
                });
            } else {
                res.status(400).json({
                    massage: 'Category Add Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

getCategory = function (req, res, next) {
    category.find().then(resault => {
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


updateCategory = function (req, res, next) {
    const newCategory = {
        category_id : req.body.category_id,
        category_name: req.body.category_name
    }
    Category.updateOne({ _id: req.params.id }, { $set: newCategory }).
        then(resault => {
            res.status(200).json({
                massage: 'Category updated Successfully',
                resault: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

deleteCategory = function (req, res, next) {
    category.deleteOne({ _id: req.params.id }).
        then(resault => {
            res.status(200).json({
                massage: 'Category deleted Successfully',
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
    addCategory: addCategory,
    getCategory: getCategory,
    updateCategory: updateCategory,
    deleteCategory: deleteCategory
}