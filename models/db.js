var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "todo"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log(" Db Connected!");
    
  });

  module.exports =con;
