const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/Product.Controller.js');


//Get a list of all products
router.get('/', ProductController.getAllProducts);


//Create a new product
router.post('/', ProductController.createNewProduct );


router.get('/:id', ProductController.findProductById );

router.patch('/:id', ProductController.updateAProduct);
router.delete('/:id', ProductController.deleteAProduct ),
module.exports = router;
