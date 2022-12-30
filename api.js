const express = require('express');
const dbconnect = require('./Connectivity');
const mongodb=require('mongodb');
const app = express();

app.use(express.json());

//Using get method(Read)
app.get('/', async(req, resp) => {
    let data= await dbconnect();
    data=await data.find().toArray();
    resp.send(data)
})

//Using Post Method(Insert)
app.post('/',async(req,resp)=>{
    console.log(req.body);
    let db=await dbconnect();
    let result=await db.insert(req.body);
    resp.send(result);
})

//Using Put Method(Update)
// app.put('/',async (req,resp)=>{
//     let db=await dbconnect();
//     let result=await db.updateOne(
//         {Fname:"Rutuja"},
//         {$set:req.body}
//         // {$set:{Address:"Malad"}} //for change multiple filds from one record.
//         );
//     resp.send({result:"Updated"});

// })


//using put method(Update)
app.put('/:Fname',async (req,resp)=>{
    let db=await dbconnect();
    let result=await db.updateOne(
        {Fname:req.params.Fname},
        {$set:req.body}
      
        );
    resp.send({result:"Updated"});

})

// //Using Delete Method(Delete)
// app.delete('/',async (req,resp)=>{
//     let db=await dbconnect();
//     let result=await db.deleteOne({Fname:"Radha"});
//     resp.send({result:"Deleted"});
// })


//Using Delete Method(Delete)
app.delete('/:id',async (req,resp)=>{
    console.log(req.params.id);
    let db=await dbconnect();
    let result=await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    resp.send(result );
})

app.listen(5000);