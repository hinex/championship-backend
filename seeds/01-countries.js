exports.seed = async function (knex) {
    await knex('countries').insert([
        { name: 'Russia' },
        { name: 'Belarus' },
        { name: 'Kyrgyzstan' },
    ])
}
