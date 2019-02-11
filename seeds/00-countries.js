exports.seed = function (knex, Promise) {
    return Promise.all([
        knex('countries').del(),
        knex('countries').insert([
            { id: 1, name: 'Russia' },
            { id: 2, name: 'Belarus' },
            { id: 3, name: 'Kyrgyzstan' },
        ]),
    ])
}
