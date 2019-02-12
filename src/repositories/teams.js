const DB = require('../db')

const create = payload => {

}

const update = (id, payload) => {

}

const remove = id => {

}

const getTeams = id => {
    return DB('countries')
        .returning('*')
}

module.exports = {
    create,
    update,
    remove,
    getTeams,
}
