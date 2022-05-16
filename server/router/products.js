const express = require('express');
const router = express.Router();
const products = require('../models/products');


const product = new products({

    title : "Apple iPhone 13 (128GB) - Blue",
    brand : "Apple",
    type : "electoronics",
    price : "₹13,999.00",
    image_url : "https://m.media-amazon.com/images/I/61wEaWM9K1L._SX679_.jpg",
    demo_url : "",
    year : "2022",
    features : [{"Color" : "Chromatic Blue"},{"memory" : "128 GB"}, {"OS" : "Funtouch OS 12 based on Android 12"} ]
})

product.save().then(() => {console.log("Product Added To Database")});


module.exports = router;