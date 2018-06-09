var mysql = require('mysql');
var db = {};
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456',
	port: '3306',
	database: 'histmap',
});
connection.connect();
db.query = function sqlback(sqllan, fn) {


	// var sql = 'SELECT * FROM 电子地图';
	var sql = sqllan;
	//查
	if (!sql) return;
	connection.query(sql, function(err, result) {
		if (err) {
			console.log('[SELECT ERROR] - ', err.message);
			return;
		}
		var data = {};
		data = JSON.stringify(result);
		// console.log('--------------------------SELECT----------------------------');
		// console.log(data);
		// console.log('------------------------------------------------------------\n\n');
		fn(data);
	});

	// connection.end();
}
module.exports = db;