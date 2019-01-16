const express = require('express')
const db = require('../utilities/db')
const router = express.Router()
const logger = require('pino')()

router.post('/addItem', async function (req, res, next) {
  let items = req.body
  if (!items) return res.status(400).send('Not enough parameter')
  else {
    let ar = []
    for (let key in items) {
      let product = await db.getOneProduct(key)
      if (product.length === 0) return res.status(500).send(key + ' is not a good')

      let cartItemInDB = await db.getCartOneItem(key)

      if (cartItemInDB.length === 0) {
        if (product[0].Inventory_count < items[key]) return res.status(500).send('There is not enough ' + key)
      } else {
        if (product[0].Inventory_count < cartItemInDB[0].Count + items[key]) return res.status(500).send('There is not enough ' + key)
      }
      ar.push({ 'Title': key, 'Count': items[key] })
    }

    return db.addCartItem(ar).then(addRes => {
      logger.info(addRes)
      res.status(200).send('Cart added')
    })
  }
})

router.get('/getcart', async function (req, res, next) {
  let cart = await db.getAllCart()
  let totalValue = 0
  for (let item in cart) {
    let product = await db.getOneProduct(cart[item].Title)
    let price = parseFloat(product[0].Price)
    totalValue += price * cart[item].Count
  }
  cart.push({ 'Total value': totalValue })
  return res.status(200).send(cart)
})

router.post('/complete', async function (req, res, next) {
  let cart = await db.getAllCart()
  return db.updateCartItem(cart).then(_ => {
    return db.deleteCart().then(_ => {
      return res.status(200).send('Complete purchase')
    })
  })
})

module.exports = router
