const { MongoClient } = require('mongodb');//This is modern syntax.
//const MongoClient=require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';//Here we mentioned path of mongodb.
const database = 'School';
const client = new MongoClient(url);

async function getData() {
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('Students');
    let response = await collection.find({}).toArray();
    console.log(response);
}
getData();