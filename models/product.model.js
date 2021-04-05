const { Schema, model } = require('mongoose');

const productSchema = Schema({
    imagePath:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    }
    
},{ timestamps: true });



module.exports = model('Product', productSchema);