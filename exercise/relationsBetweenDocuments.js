const mongoose = require('mongoose');

// we will use ObjectId for connection between collections
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

let Cat = mongoose.model('Cat', catSchema);

let Owner = mongoose.model('Owner', ownerSchema);

// let owner = new Owner({
//     name: 'Tom'
// });

// owner
    //first we save the owner so the db can add _id property 

    // .save()

    //when we have the saved object returned from the db

    // .then(owner => {
    //     let cat = new Cat({
    //         name: 'Silvestar',
    //         age: 2,
    //         owner: owner._id
    //     })

    //once we have our cat with its owner's id we can save it to db

    //     cat
    //     .save()
    //     .then(cat => {
    //         console.log(cat)
    //     });
    // });

    //remember if we delete the owner from the database first we need to find all his cats and 
    //on the field owner: owner._id, replace it with ownder: null

    
    //find all owners and for every owner find their cats

    Owner
        .find({})
        .then(owners => {
    
            for(let owner of owners) {
                console.log(`This is ${owner}`);
                Cat 
                    .find({ owner: owner._id })
                    .exec()
                    .then(cats => {
                        console.log(`These cats: ${cats} belong to ${owner.name}`)
                })
            } 
        })