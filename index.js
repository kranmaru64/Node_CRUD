const express = require('express');
const mongoose = require("mongoose");
const Product = require('./models/productModels');
const e = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/products', async(req,res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send({message: error.message})
        }
})

app.get('/products/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

app.post('/product', async(req,res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

app.put('/products/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            req.status(404).json({message : `Cannot find the product by ID: ${id}`});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500).send({message: error.message});
    }
})

app.delete('/products/:id', async(req,res) => {
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


mongoose
.connect("mongodb+srv://kmaru641995:Karan123@nodeapi.54sfhkg.mongodb.net/")
.then(()=>{
    console.log("Connected to the Database");
    app.listen(3000, () => {
        console.log("Server is listening on Port: 3000");
    })
})
.catch((error) => {
    res.status(500).send({message: error.message})
})