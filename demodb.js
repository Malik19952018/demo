var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost/3000",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});