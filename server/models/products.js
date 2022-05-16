const mongoose = require('mongoose');
const customers = require('./customers');

const {Schema} = mongoose;

const products = new Schema({

    title : String,
    brand : String,
    type : String,
    price : String,
    image_url : String,
    demo_url : String,
    year : String,
    features : Array
}) 

module.exports = mongoose.model('products', products);