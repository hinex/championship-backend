const Joi = require('joi')

const getCountry = ctx => {
    const params = Joi.object().keys({
        id: Joi.number().integer().required(),
    })

    ctx.validateParams(params)
}

const createCountry = ctx => {
    const body = Joi.object().keys({
        name: Joi.string().min(3).max(30).required(),
    })

    ctx.validateBody(body)
}

const updateCountry = ctx => {
    const body = Joi.object().keys({
        id: Joi.number().integer().required(),
        name: Joi.string().min(3).max(30).required(),
    })

    ctx.validateBody(body)
}

const removeCountry = ctx => {
    const body = Joi.object().keys({
        id: Joi.number().integer().required(),
    })

    ctx.validateBody(body)
}

const createTeam = ctx => {
    const body = Joi.object().keys({
        country: Joi.number().integer().required(),
        name: Joi.string().min(3).max(30).required(),
    })

    ctx.validateBody(body)
}

const updateTeam = ctx => {
    const body = Joi.object().keys({
        id: Joi.number().integer().required(),
        country: Joi.number().integer().required(),
        name: Joi.string().min(3).max(30).required(),
    })

    ctx.validateBody(body)
}

const removeTeam = ctx => {
    const body = Joi.object().keys({
        id: Joi.number().integer().required(),
    })

    ctx.validateBody(body)
}

const getOneTeam = ctx => {
    const params = Joi.object().keys({
        id: Joi.number().integer().required(),
    })

    ctx.validateParams(params)
}

module.exports = {
    getCountry,
    createCountry,
    updateCountry,
    removeCountry,
    createTeam,
    updateTeam,
    removeTeam,
    getOneTeam,
}
