const dbconnect=require('./Connectivity');

const DeleteData=async ()=>{
    let db=await dbconnect();//This is give promise
    // console.log(db);

    //deleted single record
    const result= await db.deleteOne({Fname:"Roopa"}); //This is give Promise
    // console.log(result);
    if(result.acknowledged){
        console.log("Record Deleted successfully");
    }
    else{
        console.log("Record not deleted");
    }

     //deleted multiple records
    // const result= await db.deleteMany({Fname:"Roopa"}); //This is give Promise
    // // console.log(result);
    // if(result.acknowledged){
    //     console.log("Record Deleted successfully");
    // }
    // else{
    //     console.log("Record not deleted");
    // }
}

DeleteData()