
const mongoose = require('mongoose');
const db = require('../models')

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/projectIcharus'
)

const patreonSeed = [
    {
        name: 'Daedalus Sol',
        image: "https://www.usamade-ar15parts.com/images/LR%20ASSEM-NS-2.jpg"
    }
]

db.PreOrder.remove({})
.then(() => db.PreOrder.insertMany(patreonSeed)).then(data => console.log(data))

