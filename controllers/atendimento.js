const Attendance = require('../models/attendance')

module.exports = app => {
  app.get("/atendimento", (req, res) => {
    Attendance.list(res)
  })

  app.get("/atendimento/:id", (req, res) => {
    const { id } = req.params

    Attendance.filter(res, id)
  })

  app.post("/atendimento", (req, res) => {
    const attendance = req.body

    Attendance.add(attendance, res)
  })

  app.patch("/atendimento/:id", (req, res) => {
    const { id } = req.params
    const values = req.body

    Attendance.update(id, values, res)
  })

  app.delete("/atendimento/:id", (req, res) => {
    const { id } = req.params

    Attendance.delete(id, res)
  })
}