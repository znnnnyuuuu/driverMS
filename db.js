const mysql = require('mysql');
exports.base = (sql, data, callback) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'drivers'
    });

    connection.connect();

    connection.query(sql, data, function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });

    connection.end();
}