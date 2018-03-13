const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

let catSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 0 },
    birthday: { type: Date },
    owner: ObjectId
})

let Cat = mongoose.model('Cat', catSchema);

module.exports = mongoose.model('Cat')

//when it needed 
//let Cat = require(./models/Cat)