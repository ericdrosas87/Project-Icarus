const mongoose =require('mongoose')
const Schema = mongoose.Schema;

const product = new Schema ({
    name: String,
    image: Array
})

const Product = mongoose.model('Product', product);

module.exports = Product