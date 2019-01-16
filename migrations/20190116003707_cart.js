
exports.up = function (knex, Promise) {
  return knex.schema.createTable('Cart', function (t) {
    t.string('Title').references('Product.Title')
    t.integer('Count')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Cart')
}
