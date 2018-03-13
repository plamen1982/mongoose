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

let Cat = mongoose.model('Cat', catSchema);

//Update - First Case
// Cat 
//     .findById('5aa83c57fd8a2045a55231aa')
//     .exec()
//     .then(cat => {
//         cat.name = 'New Cat Name';
//         cat
//             .save()
//             .then(newCat => {
//                 console.log(newCat)
//             })
//     })

//Update - Second Case
// Cat 
//     .findByIdAndUpdate('5aa83c57fd8a2045a55231aa', {
//         $set: { name: 'Kotio s novo ime' }
//     })
//     .exec()
//     .then(cat => {
//         console.log(cat)
//     })
    
//Update - multiple updates

// Cat
//     .update(
//         { name: 'The big cat' },
//         { $set: { name: 'Pesho'} },
//         { multi: true }
//     )
//     .exec()
//     .then(result => {
//         console.log(result);
//     })

//Remove - by Id

// Cat
//     .findByIdAndRemove('5aa83c57fd8a2045a55231aa')
//     .exec()
//     .then(removed => {
//         console.log(removed)
//     })

//Remove - multiple

// Cat
//     .remove({name: 'Pesho'})
//     .exec()
//     .then(removed => {
//         console.log(removed)
//     })

//Count

// Cat
//     .count()
//     .exec()
//     .then(count => {
//         console.log(count);
//     })

// Cat
//     .count({ age: { $gt: 2 }})
//     .exec()
//     .then(result => {
//         console.log(result)
//     });

// Find with condition

// Cat
//     .find({ age: { $gt: 2 }})
//     .exec()
//     .then(result => {
//         console.log(result)
//     });

// Find with multiple conditions

// Cat
//     .find({ 
//         $or: [
//             { name: 'The small cat'},
//             { name: 'Micheal'}
//         ]
// })
//     .exec()
//     .then(result => {
//         console.log(result)
//     });

//Sort
// Cat
//     .find({})
//     .limit(2)
//     .sort('name -age')
//     .exec()
//     .then(cats => {
//         console.log(cats)
//     })

//Select
// Cat
//     .find({})
//     .limit(2)
//     //return document only with name field
//     .select('name')
//     .exec()
//     .then(cats => {
//         console.log(cats)
//     })

//Where

// Cat
//     .find({})
//     .limit(2)
//     .select('name')
//     //return document only with name field
//     .where('age').gt(10)
//     .where('name').equals('Micheal')
//     .exec()
//     .then(cats => {
//         console.log(cats)
//     })