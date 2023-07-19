const express = require("express");
const Product = require('../models/productModels');


//Get all the data

const getAllProducts = (async(req,res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send({message: error.message})
        }
})

//Get tasks by ID

const getProductbyID= (async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

//Enter new Product

const createProduct = (async(req,res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

//Update the Product

const updateProduct = (async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            req.status(404).json({message : `Cannot find the product by ID: ${id}`});
        }
        const newProduct = await Product.findById(id);
        res.status(200).json(newProduct);
        
    } catch (error) {
        res.status(500).send({message: error.message});
    }
})


//Delete a Product

const deleteProduct = (async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            req.status(404).json({message: `Cannot find the product by ID: ${id}`});
        }
        const updatedProduct = await Product.find({});
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
})


module.exports = {
    getAllProducts,
    getProductbyID,
    createProduct,
    updateProduct,
    deleteProduct
};