const mysql = require('mysql2');
const env = require("dotenv");
env.config();
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:process.env.SQL_Password,
    database:"SCHOOLS"
})

db.connect((err)=>{
 if (err) {
    console.log("The error is", err); // may be sql databse name not correct
  } else {
    console.log("MySQL Connected");
  }
});

module.exports=db;