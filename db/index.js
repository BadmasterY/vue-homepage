const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'me',
    password: 'yuzhoujie20',
    database: 'demoDb'
});

connection.connect(err => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    // console.log(error)
    // console.log('The solution is: ', results[0].solution);
});

connection.end(err => err);