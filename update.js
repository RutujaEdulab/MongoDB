const dbconnect = require('./Connectivity');

//Update Code
const Updatedata = async () => {
    let db = await dbconnect();

    //insert Single Record.
    const result = await db.updateOne(
        { Fname: "Aruna" }, { $set: { Address: "Borivali" } }
        // { Fname: "Aruna" }, { $set: { Address: "Borivali",Lname:"Patel" } } //update multiple fields from one record.
    );
    if (result.acknowledged == true) {
        console.log("Update Successfully");
    }
    else {
        console.log("Update Failure");
    }

    // const result=await db.update(
    //     {},{$set:{Address:"Borivali"}}
    //     );
    //     if(result.acknowledged==true){
    //         console.log("Update Successfully");
    //     }
    //     else{
    //         console.log("Update Failure");
    //     }
}

Updatedata();