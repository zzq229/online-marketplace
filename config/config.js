const path = require('path')
const configVar = require('dotenv').config({ path: path.join(__dirname, '/.env') })
const knex = require('knex')

const db = knex({
  client: 'pg',
  connection: {
    host: configVar.parsed.DATABASE_HOST,
    port: configVar.parsed.DATABASE_PORT,
    database: configVar.parsed.DATABASE_NAME,
    user: configVar.parsed.DATABASE_USER,
    password: configVar.parsed.DATABASE_PASSWORD
  }
})

module.exports = {
  getKnex: async function () {
    return new Promise((resolve, reject) => resolve(db))
  }
}
