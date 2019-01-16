
exports.up = function (knex, Promise) {
  return knex.schema.createTable('Product', function (t) {
    t.string('Title').primary()
    t.decimal('Price')
    t.integer('Inventory_count')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Product')
}
