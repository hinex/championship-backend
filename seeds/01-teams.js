exports.seed = function (knex, Promise) {
    return Promise.all([
        knex('teams').insert([
            { country: 1, name: 'Spartak Moscow' },
            { country: 1, name: 'CSKA Moscow' },
            { country: 1, name: 'Terek Grozny' },
            { country: 2, name: 'FC Minsk' },
            { country: 2, name: 'BATE Borisov' },
            { country: 2, name: 'FC Dinamo Minsk' },
            { country: 3, name: 'FC Abdish-Ata' },
            { country: 3, name: 'FC Ak-Bura' },
            { country: 3, name: 'FC Ak-Zhol' },
        ]),
    ])
}
