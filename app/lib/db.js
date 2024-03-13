const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host:"localhost",
  user:"nextjs",
  password:"X/Fh-!A/@e8Y7hn7",
  database:"nextjs",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function query(sql, values) {
  const [rows, fields] = await pool.query(sql, values);
  return rows;
}

module.exports = { query };