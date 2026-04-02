const mysql = require('mysql2');
require("dotenv").config();

let db;
try {
  db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.SQL_Password,
    database: "SCHOOLS"
  });

  db.connect((err) => {
    if (err) {
      console.log("DB not connected ");
    } else {
      console.log("MySQL Connected ");
    }
  });

} catch (error) {
  console.log("DB completely skipped ");
}

module.exports = db;