const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "adventure",
});
module.exports = db;
// db.connect((err) => {
//   if (err) console.log(err);
//   console.log("db connected");
// });
