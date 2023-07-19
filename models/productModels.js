const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"Product name is needed"],
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    price:{
        type:Number,
        required: true,
        default: 0
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;