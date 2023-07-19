const express = require('express');
const connectionString = require('./connect');

const router = require('./controller/productRoute');
const app = express();

//Middleware
app.use(express.json());
app.use('/products',router);

app.listen(3000, () => {
    console.log("Server is listening on Port: 3000");
})

