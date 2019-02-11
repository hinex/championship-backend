exports.seed = function (knex, Promise) {
    return Promise.all([
        knex('teams').del(),
        knex('teams').insert([
            { id: 1, country: 1, name: 'Spartak Moscow' },
            { id: 2, country: 1, name: 'CSKA Moscow' },
            { id: 3, country: 1, name: 'Terek Grozny' },
            { id: 4, country: 2, name: 'FC Minsk' },
            { id: 5, country: 2, name: 'BATE Borisov' },
            { id: 6, country: 2, name: 'FC Dinamo Minsk' },
            { id: 7, country: 3, name: 'FC Abdish-Ata' },
            { id: 8, country: 3, name: 'FC Ak-Bura' },
            { id: 9, country: 3, name: 'FC Ak-Zhol' },
        ]),
    ])
}
