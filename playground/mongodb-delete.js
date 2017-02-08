const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://192.168.0.5:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Users').deleteOne({name:'Andrew'}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log(err);
    // });

    // db.collection('Users').deleteMany({name:'Andrew'}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log(err);
    // });

    db.collection('Users').findOneAndDelete({name:'Mike'}).then((result)=>{
        console.log(result);
    },(err)=>{
        console.log(err);
    })

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log('Could not delete');
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // }).catch((err)=>{
    //     console.log(err);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // db.close();

});