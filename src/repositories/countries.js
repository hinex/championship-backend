const DB = require('../db')

const create = payload => {

}

const update = (id, payload) => {

}

const remove = id => {

}

const getCountries = async () => {
    return DB('countries')
        .returning('*')
}

module.exports = {
    create,
    update,
    remove,
    getCountries,
}
