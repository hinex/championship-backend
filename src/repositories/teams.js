const DB = require('../db')
const Countries = require('./countries')

const create = async payload => {
    const country = await Countries.getOne(payload.country)

    if (!country) {
        throw new Error('Country not found')
    }

    return DB('teams')
        .insert(payload)
}

const update = async (id, payload) => {
    const country = await Countries.getOne(payload.country)

    if (!country) {
        throw new Error('Country not found')
    }

    return DB('teams')
        .where({ id: id })
        .update(payload)
}

const remove = async id => {
    return DB('teams')
        .where({ id: id })
        .del()
}

const getList = () => {
    return DB('teams as t')
        .select('t.id', 'c.name as country', 't.name', 't.created_at', 't.updated_at')
        .leftJoin('countries as c', 'c.id', 't.country')
        .returning('*')
}

const getListByCountry = countryId => {
    return DB('teams as t')
        .select('t.id', 'c.name as country', 't.name', 't.created_at', 't.updated_at')
        .leftJoin('countries as c', 'c.id', 't.country')
        .where('t.country', countryId)
        .returning('*')
}

const getOne = async id => {
    return DB('teams')
        .where({ id: id })
        .returning('*')
        .get(0)
}

module.exports = {
    create,
    update,
    remove,
    getList,
    getOne,
    getListByCountry,
}
