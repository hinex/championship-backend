const DB = require('../db')

const create = async payload => {
    return DB('countries')
        .insert(payload)
}

const update = async (id, payload) => {
    return DB('countries')
        .where({ id: id })
        .update(payload)
}

const remove = async id => {
    await DB('teams')
        .where({ country: id })
        .del()

    return DB('countries')
        .where({ id: id })
        .del()
}

const getCountries = async () => {
    return DB('countries')
        .returning('*')
}

const getOne = async id => {
    return DB('countries')
        .where({ id: id })
        .returning('*')
        .get(0)
}

module.exports = {
    create,
    update,
    remove,
    getCountries,
    getOne,
}
