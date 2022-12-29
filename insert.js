const dbconnect = require('./Connectivity');


//Insert Code
const insert = async () => {
    const db = await dbconnect();//Here return Promise.

    //single record inserted
    const result = await db.insert(
        { Fname: "Aruna", Lname: "Waghmare", Address: "Kandivali", PhoneNo: 457889541697 }
    );
    if (result.acknowledged == true) {
        console.log("Data Inserted Successfully");
    }
    else {
        console.log("Sorry Your data Is Not Inserted");
    }

    //This Code for inserting multiple records
    // const result = await db.insert(
    //    [ { Fname: "Aruna", Lname: "Waghmare", Address: "Kandivali", PhoneNo: 457889541697 },
    //     { Fname: "Ruhi", Lname: "Sharma", Address: "Malad", PhoneNo:4587123695 },
    //     
    // ]

    // );
    // if (result.acknowledged == true) {
    //     console.log("Data Inserted Successfully");
    // }
    // else {
    //     console.log("Sorry Your data Is Not Inserted");
    // }
}
insert();