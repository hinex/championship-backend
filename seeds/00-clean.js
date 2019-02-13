exports.seed = async function (knex) {
    await knex('teams').del()
    await knex('countries').del()
}
