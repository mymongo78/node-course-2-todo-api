const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://192.168.0.5:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({_id:new ObjectID('589a1bf8bc3a2221d4fa2bff')}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch docs',err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count:${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch docs', err);
    // });

    db.collection('Users').find({name:'Andrew'}).count().then((count)=>{
        console.log(count);
    },(err)=>{
        console.log('Unable to fetch data', err);
    })

    db.close();

});