const mongoose = require('mongoose');
const db = require('../models')


mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/projectIcharus'
)

const productSeed = [
    {
        name: 'Daedalus Sol',
        image: [ 
            "https://i.ibb.co/B6rYtLn/039.jpg", 
            "https://i.ibb.co/CQ8r0JR/040.jpg", 
            "https://i.ibb.co/4NZWjFx/041.jpg", 
            "https://i.ibb.co/Qv9VJpm/042.jpg", 
            "https://i.ibb.co/qjtfJQc/043.jpg", 
            "https://i.ibb.co/2cRrbz6/044.jpg", 
            "https://i.ibb.co/swD7B6S/045.jpg", 
            "https://i.ibb.co/LRSVhjT/046.jpg", 
            "https://i.ibb.co/d6FcgRD/048.jpg", 
            "https://i.ibb.co/5hQ1xYz/047.jpg"
        ]
    }
]

db.Product.remove({})
.then(() => db.Product.insertMany(productSeed)).then(data => console.log(data))

