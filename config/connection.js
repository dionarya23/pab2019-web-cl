const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'workshop-pab'
});


module.exports = connection;