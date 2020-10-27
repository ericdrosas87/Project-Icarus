const mongoose = require('mongoose');
const db = require('../models')
const images = require('../images')

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/projectIcharus'
)

const productSeed = [
    {
        name: 'Daedalus Sol',
        image: "https://www.usamade-ar15parts.com/images/LR%20ASSEM-NS-2.jpg"
    }
]

db.Product.remove({})
.then(() => db.Product.insertMany(productSeed)).then(data => console.log(data))

