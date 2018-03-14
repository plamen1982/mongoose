const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/myfunnycatdb', (err) => {
    if(err) {
        console.log(err);
        return
    }
 
});

let catSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 0 },
    birthday: { type: Date },
    owner: ObjectId
})

//create methods before creating the model, and never use fat arrow functions !!! Because we using .this
catSchema.methods.sayHello = function () {
    return `Hello ${this.name}. I am ${this.age} years old!`
}

catSchema.virtual('nameAndAge').get( function () {
    return `${ this.name } ${this.age} `
});

//TODO: set virtual property

let ownerSchema = new mongoose.Schema({ 
    name: { type: String, required: true }

})

let Cat = mongoose.model('Cat', catSchema);

let Owner = mongoose.model('Owner', ownerSchema);

// Cat
//     .find({})
//     .exec()
//     .then(cats => {
//         for(let cat of cats) {
//             console.log(cat.sayHello())
//         }
//     })
let cat = new Cat({
    name: 'Micheal',
    age: 18
})

cat
    .save()
    .then(cat => {
        console.log(cat.nameAndAge)
    })