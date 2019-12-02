const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/all', db.getAll)
app.get('/team/:id', db.getByTeam)
app.get('/sprint/:id', db.getBySprint)


  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })