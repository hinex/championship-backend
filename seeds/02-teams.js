exports.seed = async function (knex) {
    const countries = await knex('countries').returning('*')
    const russia = countries.find(c => c.name === 'Russia')
    const belarus = countries.find(c => c.name === 'Belarus')
    const kyrgyzstan = countries.find(c => c.name === 'Kyrgyzstan')

    await knex('teams').insert([
        { country: russia.id, name: 'Spartak Moscow' },
        { country: russia.id, name: 'CSKA Moscow' },
        { country: russia.id, name: 'Terek Grozny' },
        { country: belarus.id, name: 'FC Minsk' },
        { country: belarus.id, name: 'BATE Borisov' },
        { country: belarus.id, name: 'FC Dinamo Minsk' },
        { country: kyrgyzstan.id, name: 'FC Abdish-Ata' },
        { country: kyrgyzstan.id, name: 'FC Ak-Bura' },
        { country: kyrgyzstan.id, name: 'FC Ak-Zhol' },
    ])
}
