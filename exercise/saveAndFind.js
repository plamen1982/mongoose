const mongoose = require('mongoose');


mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/myfunnycatdb', (err) => {
    if(err) {
        console.log(err);
        return
    }

    let Cat = mongoose.model('Cat', {
        name: { type: String, required: true},
        age: { type: Number }
    });

    let Owner = mongoose.model('Owner', {
        //unique - only unique names, index: we place index when we expect to have more search for this field than creating
        name: { type: String, required: true, index: true, unique: true},
        cats: [Cat.schema]
    });

    let myrkins = new Cat({ name: 'Myrkins', age: 1 });
    let malcho = new Cat({ name: 'Malcho', age: 1 });

    let pax = new Owner({
        name: 'pax',
        //save as nested array of cats in pax object
        cats: [myrkins, malcho]
    });

    // pax
    //     .save()
    //     .then(pax => {
    //         console.log(pax)
    //     });

    // Owner
    //     .find({name: 'pax'})
    //     .exec()
    //     .then(pax => {
    //         console.log(pax);
    //     })
    
});

