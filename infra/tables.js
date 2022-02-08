class Tables {
  init(connection) {
    this.connection = connection

    this.createAttendance()
  }

  createAttendance() {
    const sql = 'CREATE TABLE IF NOT EXISTS Attendance (id int NOT NULL AUTO_INCREMENT, client varchar(50) NOT NULL, pet varchar(20), service varchar(50) NOT NULL, status varchar(20) NOT NULL, date datetime NOT NULL, criationDate datetime NOT NULL, note text, PRIMARY KEY(id))'
    this.connection.query(sql, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('tabela criada com sucesso')
      }
    })
  }
}

module.exports = new Tables