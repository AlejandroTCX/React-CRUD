const { Pool } = require('pg');

const pool = new Pool({
	user: 'root',
	password: 'root',
	host: 'localhost',
	port: 5432,
	database: 'tasksdb',
});

module.exports = pool;
