const express = require('express');
const products = require('./router/products');
const router = express.Router();


router.use(express.json());



router.use('/products', products);


module.exports = router;