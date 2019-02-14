const Teams = require('../repositories/teams')
const Validation = require('../services/validation')

const create = async (ctx, next) => {
    try {
        Validation.createTeam(ctx)

        const { country, name } = ctx.request.body

        await Teams.create({
            country,
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
        const teams = await Teams.getList()

        ctx.successResponse(teams)
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

const update = async (ctx, next) => {
    try {
        Validation.updateTeam(ctx)

        const { id, country, name } = ctx.request.body

        await Teams.update(id, {
            country,
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
        Validation.removeTeam(ctx)

        const { id } = ctx.request.body

        await Teams.remove(id)

        ctx.successResponse()
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

const getOne = async (ctx, next) => {
    try {
        Validation.getOneTeam(ctx)

        const { id } = ctx.params

        const team = await Teams.getOne(id)

        if (!team) {
            ctx.errorResponse({ message: 'Not found' }, 404)
            return next()
        }

        ctx.successResponse(team)
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

module.exports = {
    create,
    getOne,
    getList,
    update,
    remove,
}
