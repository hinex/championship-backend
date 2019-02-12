const Countries = require('../repositories/countries')
const Validation = require('../services/validation')

const create = async (ctx, next) => {
    try {
        Validation.createCountry(ctx)

        const { name } = ctx.request.body

        await Countries.create({
            name,
        })

        ctx.successResponse()
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

const getList = async (ctx, next) => {
    try {
        const countries = await Countries.getCountries()

        ctx.successResponse(countries)
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

const update = async (ctx, next) => {
    try {
        Validation.updateCountry(ctx)

        const { id, name } = ctx.request.body

        await Countries.update(id, {
            name,
        })

        ctx.successResponse()
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

const remove = async (ctx, next) => {
    try {
        Validation.removeCountry(ctx)

        const { id } = ctx.request.body

        await Countries.remove(id)

        ctx.successResponse()
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

module.exports = {
    create,
    getList,
    update,
    remove,
}
