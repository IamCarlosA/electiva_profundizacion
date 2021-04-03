const { Schema, model } = require('mongoose');

const productSchema = Schema({
    
    
},{ timestamps: true });



module.exports = model('product', productSchema);