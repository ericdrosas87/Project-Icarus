const mongoose = require('mongoose');
const db = require('../models')

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/projectIcharus'
)

const patreonSeed = [
    {
        name: "test mctesty",
        address: "1234 N testyroad",
        email: "testnumberTwo@Email.com",
        phone: 885-113-4456,
        product: [{
            name: "Pistol grip"
        }]   }
]

db.Patreon.remove({})
.then(() => db.Patreon.insertMany(patreonSeed)).then(data => console.log(data))