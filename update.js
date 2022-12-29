const dbconnect = require('./Connectivity');

//Update Code
const Updatedata = async () => {
    let db = await dbconnect();

    //insert Single Record.
    const result = await db.update(
        { Fname: "Aruna" }, { $set: { Address: "Borivali" } }
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