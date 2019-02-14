const Countries = require('../repositories/countries')
const Validation = require('../services/validation')
const Teams = require('../repositories/teams')

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

const getCountry = async (ctx, next) => {
    try {
        Validation.getCountry(ctx)

        const { id } = ctx.params

        const country = await Countries.getOne(id)

        if (!country) {
            ctx.errorResponse({ message: 'Not found' }, 404)
            return next()
        }

        const teams = await Teams.getListByCountry(id)

        ctx.successResponse({
            country,
            teams,
        })
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
    getCountry,
}
