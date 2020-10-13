const mongoose =require('mongoose')
const Schema = mongoose.Schema;

const userInfo = new Schema ({
    name:{type :String, required:true},
    address:{type: String, required:true},
    email:{type: String, required:true},
    phone:{type: Number, required:true}
})

const Patreon = mongoose.model('Patreon', userInfo);

module.exports = Patreon;