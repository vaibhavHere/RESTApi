const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    description: {
    type:String
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        default:1
    }
})

const product=new mongoose.model('product',productSchema)
module.exports=product;