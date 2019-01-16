
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Product').del()
    .then(function () {
      // Inserts seed entries
      return knex('Product').insert([
        { Title: 'apple', Price: 5, 'Inventory_count': 10 },
        { Title: 'Double-Double', Price: 1.79, 'Inventory_count': 30 },
        { Title: 'Chick-fil-A', Price: 3.5, 'Inventory_count': 5 },
        { Title: 'PS4', Price: 299, 'Inventory_count': 0 }
      ])
    })
}
