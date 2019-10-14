// Set up MySQL connection.
var mysql = require("mysql");

var connection;

// Heroku connection
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "", // add your password
    database : 'burgers_db' 
  });
}

connection.connect();

// Export the Connection
module.exports = connection;
