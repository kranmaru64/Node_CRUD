const express = require("express");
const tasks = require("../routes/tasks");

const router = express.Router();

router.get('/',tasks.getAllProducts);
router.get('/:id',tasks.getProductbyID);
router.post('/',tasks.createProduct);
router.put('/:id',tasks.updateProduct);
router.delete('/:id', tasks.deleteProduct);


module.exports = router;