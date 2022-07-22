const Product = require("../models/product.model");

//create
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json({message:"Error making a product",error:err}));
}
//read all
module.exports.findAllProducts = (req, res) => {
    Product.find()
    
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message:"Error finding all products",error:err}));
}
//read one
module.exports.findOneProduct = (req, res) => {
    Product.create({_id:req.params._id})
    
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message:"Error finding one product",error:err}));
}
//update
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id:req.params._id},req.body,{new:true})
    
        .then(updateProduct => res.json(updateProduct))
        .catch(err => res.json({message:"Error updating a product",error:err}))
}
//delete
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id:req.params._id})
    
        .then(res.json({message:"Product was deleted"}))
        .catch(err => res.json({message:"Error deleting a product",error:err}))
}