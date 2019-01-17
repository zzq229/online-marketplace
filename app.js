const express = require('express')
const port = 3000
const logger = require('pino')()
const productRouter = require('./routes/product')
const cartRouter = require('./routes/cart')
const helmet = require('helmet')

const app = express()

app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/product', productRouter)
app.use('/cart', cartRouter)

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}!`)
})
