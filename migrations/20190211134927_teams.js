exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('teams', table => {
            table.increments('id').primary()
            table.integer('country').references('countries.id')
            table.string('name')
            table.timestamps(true, true)
        }),
    ])
}

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('teams'),
    ])
}
