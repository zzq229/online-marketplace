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

async function buyProduct (title) {
  let db = await dbPromise
  return db('Product').where('Title', title).decrement({ Inventory_count: 1 })
}

async function addCartItem (items) {
  let db = await dbPromise
  let promises = []
  for (let i in items) {
    let item = await getCartOneItem(items[i].Title)
    if (item.length === 0) promises.push(db('Cart').insert(items[i]))
    else promises.push(db('Cart').where('Title', items[i].Title).increment('Count', items[i].Count))
  }
  return Promise.all(promises)
}

async function getCartOneItem (title) {
  let db = await dbPromise
  return db('Cart').where('Title', title)
}

module.exports.createProduct = createProduct
module.exports.getOneProduct = getOneProduct
module.exports.getAllProduct = getAllProduct
module.exports.buyProduct = buyProduct
module.exports.addCartItem = addCartItem
module.exports.getCartOneItem = getCartOneItem
