const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product must have a title"]
    },
    price: {
        type: Number,
        required: [true, "Product must have a Price"],
        
    },
    description: {
        type: String,
        required: [true, "Product must have a Description"]
    }
},{timestamps:true})

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;