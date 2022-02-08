const connection = require('../infra/connection')

class Attendance {
  add(attendance, res) {
    const criationDate = new Date()
    const date = new Date(attendance.date)
    const newAttendance = { ...attendance, criationDate, date }
    const validDate = date >= criationDate
    const validName = attendance.client.length >= 5
    const validations = [
      {
        name: "client",
        message: "name need length same or greater then 5",
        validation: validName
      },
      {
        name: "date",
        message: "date need same today or greater",
        validation: validDate
      }
    ]
    const errors = validations.filter(valid => !valid.validation)

    if (errors.length) {
      res.status(400).json(errors)

    } else {
      const sql = 'INSERT INTO Attendance SET ?'

      connection.query(sql, newAttendance, (err) => {
        if (err) {
          res.status(400).json(err)
        } else {
          res.status(201).json(newAttendance)
        }
      })
    }
  }

  list(res) {
    const sql = 'SELECT * FROM Attendance'

    connection.query(sql, (err, result) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.status(200).json(result)
      }
    })
  }

  filter(res, id) {
    const sql = `SELECT * FROM Attendance WHERE id=${id}`

    connection.query(sql, (err, result) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.status(200).json(...result)
      }
    })
  }

  update(id, values, res) {
    if (values.date) {
      values.date = new Date(values.date)
    }

    const sql = 'UPDATE Attendance SET ? WHERE id=?'

    connection.query(sql, [values, id], (err) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.status(200).json({ ...values, id })
      }
    })
  }

  delete(id, res) {
    const sql = 'DELETE FROM Attendance WHERE id=?'

    connection.query(sql, [id], (err) => {
      if (err) {
        res.status(400).json(err)
      } else {
        res.status(200).json({ id })
      }
    })
  }
}

module.exports = new Attendance