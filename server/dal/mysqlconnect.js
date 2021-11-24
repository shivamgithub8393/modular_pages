const mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shivam123",
  database: "blog_app_db",
  port: 3360,
});

con.connect((err) => {
  if (err) throw err;

  console.log("Connected");
});

module.exports = con;
