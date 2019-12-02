const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

const getAll = (request, response) => {
    pool.query('SELECT * FROM apm_data', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getByTeam = (request, response) => {
    const id = parseInt(request.params.id)
  
    team_name = "Team" + id

    pool.query('SELECT * FROM apm_data WHERE team_name = $1', [team_name], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getBySprint = (request, response) => {
    const id = parseInt(request.params.id)
  
    sprint = "S" + id

    pool.query('SELECT * FROM apm_data WHERE sprint = $1', [sprint], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getAll,
    getByTeam,
    getBySprint,
    
  }