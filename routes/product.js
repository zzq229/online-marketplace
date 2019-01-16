const express = require('express')
const db = require('../utilities/db')
const router = express.Router()
const logger = require('pino')()

router.get('/getone/:title', function (req, res, next) {
  let title = req.params.title
  if (!title) return res.status(400).send('Not enough parameter')
  else {
    return db.getOneProduct(title).then(getRes => {
      if (getRes.length === 0) {
        res.status(500).send('Product does not exist')
      } else {
        logger.info(getRes[0])
        res.status(200).send(getRes[0])
      }
    })
  }
})

router.get('/getall', function (req, res, next) {
  let onlyAvailable = req.query.onlyavailable
  if (!onlyAvailable) return res.status(400).send('Not enough parameter')
  else {
    return db.getAllProduct(onlyAvailable).then(getRes => {
      logger.info(getRes)
      res.status(200).send(getRes)
    })
  }
})

module.exports = router
