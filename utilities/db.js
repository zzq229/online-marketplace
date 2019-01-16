const config = require('../config/config')

let dbPromise = config.getKnex()

async function createProduct (title, price, count) {
  let db = await dbPromise
  let insertObject = {
    Title: title,
    Price: price,
    Inventory_count: count
  }
  return db('Product').insert(insertObject).then(_ => insertObject)
}

async function getOneProduct (title) {
  let db = await dbPromise
  return db('Product').where('Title', title)
}

async function getAllProduct (onlyAvailable) {
  let db = await dbPromise
  if (onlyAvailable) return db('Product').where('Inventory_count', '>', 0)
  else return db('Product')
}

module.exports.createProduct = createProduct
module.exports.getOneProduct = getOneProduct
module.exports.getAllProduct = getAllProduct
