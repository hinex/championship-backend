const Joi = require('joi')

const createCountries = ctx => {
    const body = Joi.object().keys({
        name: Joi.string().alphanum().min(3).max(30).required(),
    })

    ctx.validateBody(body)
}

module.exports = {
    createCountries,
}
