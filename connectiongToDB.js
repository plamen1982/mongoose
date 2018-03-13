const mongoose = require('mongoose');

//use Node.js Promise instead of this one in mongoose which one is depricated
mongoose.Promise = global.Promise;

//connect to the db if doesn't exist, create it
mongoose.connect('mongodb://localhost:27017/myfunnycatdb', (err) => {
    if(err) {
        console.log(err);
        return
    }
    //First argument is the name of the model, this is how is going to be converted as a table in the database
    //Second argument is the Schema or what kind of fields with their types we will have in this database 
    let Cat = mongoose.model('Cat', {
        name: { type: String, required: true},
        age: { type: Number }
    });


    // create new object from model/class Cat, add name and age to the cat
    // let cat = new Cat({
    //     name: 'The small cat',
    //     age: 10
    // });
    //save this object to database, second chain .then() is to retrieve the object from the database
    // cat
    //     .save()
    //     .then(cat => {
    //         console.log(cat)
    //     })

    //with the model we have access to the database. 
    //With find we have three chains. first .find({}) sedond .exec() and third .then() with the documents from db

    Cat
        .find({}) //.findOne({name:'The small cat'}) //.findById('5aa82e2c62dd8a26e674eb0a') //.findByIdAndRemove('5aa82e2c62dd8a26e674eb0a')
        .exec()
        .then(cat => {
            console.log(cat)
        });
});

