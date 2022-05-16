const mongoose = require('mongoose');

const {Schema} = mongoose;


const customers = new Schema({

    id : String,
    profile_url : String,
    username : String,
    firstname : String,
    lastname : String,
    gmail : String,
    addresses : Array
})


module.exports = mongoose.model('customers',customers);