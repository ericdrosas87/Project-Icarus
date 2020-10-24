const mongoose =require('mongoose')
const Schema = mongoose.Schema;

const preOrder = new Schema ({
    name: String,
    image: String
})

const PreOrder = mongoose.model('preOrder', preOrder)

module.exports = PreOrder;