const mysql = require('mysql')

const conn = mysql.createConnection({
  'localhost': '127.0.0.1',
  'user': 'root',
  'password': 'root',
  'database': 'nodeexc1'
})

module.exports = conn;