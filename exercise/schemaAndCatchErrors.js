const mongoose = require('mongoose');


mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/myfunnycatdb', (err) => {
    if(err) {
        console.log(err);
        return
    }
 
});
// types with mongoose.Schema => String. Number. Date. Buffer. Boolean. Mixed. Objectid. Array.
// notice we using the key word new if front of mongoose.Schema
let catSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 0 },
    birthday: { type: Date }
})
// notice we do not use the kye word new
let Cat = mongoose.model('Cat', catSchema);

let catWithError = new Cat({
    // name: 'hrisi',  // delete comment if you want to save this catWithError
    age: 15,
    birthday: new Date("2015-05-08")
})
//third chain method .catch() is for catching errors send from db if we have one, in this case required: true
catWithError
    .save()
    .then(cat => {
        console.log(cat)
    })
    .catch(err => {
        // console.log(err.message)
        // console.log(err.errors['name'].message);

        //print
        let errors = err.errors;
        //notice we use for(let errKey in errors) {}, since this is not iterable
        for(let errKey in errors) {
            console.log(errKey)
            console.log(errors[errKey].message)
        }
        return
    })