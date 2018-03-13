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


let ownerSchema = new mongoose.Schema({ 
    name: { type: String, required: true }

})

catSchema.path('age').validate(age => {
    return age >= 0 && age < 20
}, 'Age must be a number between 0 and 20')

let Cat = mongoose.model('Cat', catSchema);

let Owner = mongoose.model('Owner', ownerSchema);

let cat = new Cat({
    name: 'Envi',
    age : 21
})

cat 
    .save()
    .then(cat => {
        console.log(cat)
    })
    .catch(err => {
        let errors = err.errors
        for(key in errors) {
            console.log(errors[key].message)
        }
    })