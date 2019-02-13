const DB = require('../db')

const create = async payload => {
    return DB('teams')
        .insert(payload)
}

const update = async (id, payload) => {
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
        .select('t.id', 'c.name as country', 't.name')
        .leftJoin('countries as c', 'c.id', 't.country')
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
}
