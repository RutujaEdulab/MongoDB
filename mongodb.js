//Read data Code.

const dbconnect=require('./Connectivity');


const main=async ()=>{
    let data=await dbconnect();
    data=await data.find().toArray();
    console.warn(data);
}

main();