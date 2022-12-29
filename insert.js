const dbconnect = require('./Connectivity');

const insert = async () => {
    const db = await dbconnect();//Here throw Promise.
    const result = await db.insert(
        { Fname: "Aruna", Lname: "Waghmare", Address: "Kandivali", PhoneNo: 457889541697 }
    );
    if (result.acknowledged == true) {
        console.log("Data Inserted Successfully");
    }
    else {
        console.log("Sorry Your data Is Not Inserted");
    }
}
insert();