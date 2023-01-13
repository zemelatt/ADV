const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Adventure",
});
module.exports = db;
// db.connect((err) => {
//   if (err) console.log(err);
//   console.log("db connected");
// });
