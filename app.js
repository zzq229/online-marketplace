const express = require('express')
const port = 3000
const logger = require('pino')()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}!`)
})
