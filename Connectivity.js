const {MongoClient}=require('mongodb')
const url='mongodb://localhost:27017';
const database="School";
const client=new MongoClient(url);

async function dbconnect(){
    let result=await client.connect();
    db=result.db(database);
    return db.collection('Students');
}

module.exports=dbconnect;
