const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "db_serv",
  user: "root",
  password: "password",
  database: "adventure",
  port: 3306,
  // socketPath: "/cloudsql/project:region:instance",
});
module.exports = db;
// db.connect((err) => {
//   if (err) console.log(err);
//   console.log("db connected");
// });
