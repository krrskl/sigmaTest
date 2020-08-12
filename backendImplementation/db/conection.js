const mysql = require("mysql");

const con = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 5,
});

con.on("error", (err) => console.error(err));

module.exports = con;
