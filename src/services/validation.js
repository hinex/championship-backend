const Joi = require('joi')

const createCountry = ctx => {
    const body = Joi.object().keys({
        name: Joi.string().alphanum().min(3).max(30).required(),
    })

    ctx.validateBody(body)
}

const updateCountry = ctx => {
    const body = Joi.object().keys({
        id: Joi.string().numeric().required(),
        name: Joi.string().alphanum().min(3).max(30).required(),
    })

    ctx.validateBody(body)
}

const removeCountry = ctx => {
    const body = Joi.object().keys({
        id: Joi.string().numeric().required(),
    })

    ctx.validateBody(body)
}

const createTeam = ctx => {
    const body = Joi.object().keys({
        country: Joi.string().numeric().required(),
        name: Joi.string().alphanum().min(3).max(30).required(),
    })

    ctx.validateBody(body)
}

const updateTeam = ctx => {
    const body = Joi.object().keys({
        id: Joi.string().numeric().required(),
        country: Joi.string().numeric().required(),
        name: Joi.string().alphanum().min(3).max(30).required(),
    })

    ctx.validateBody(body)
}

const removeTeam = ctx => {
    const body = Joi.object().keys({
        id: Joi.string().numeric().required(),
    })

    ctx.validateBody(body)
}

const getOneTeam = ctx => {
    const query = Joi.object().keys({
        id: Joi.string().numeric().required(),
    })

    ctx.validateQuery(query)
}

module.exports = {
    createCountry,
    updateCountry,
    removeCountry,
    createTeam,
    updateTeam,
    removeTeam,
    getOneTeam,
}
