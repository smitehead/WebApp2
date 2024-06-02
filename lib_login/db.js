var mysql = require('mysql2');
var db = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    password: '1234',
    database: 'LibraryDB;'
});
db.connect();

module.exports = db;