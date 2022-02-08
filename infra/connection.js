const mysql2 = require('mysql2')

const connection = mysql2.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'admin',
  password: '68d!Qn0Le$gf',
  database: 'agenda_petshop'
})

module.exports = connection