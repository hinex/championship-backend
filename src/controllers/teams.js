const Teams = require('../repositories/teams')
const Validation = require('../services/validation')

const create = async (ctx, next) => {
    try {
        Validation.createTeam(ctx)
        await Teams.create()

        ctx.successResponse()
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

const getList = async (ctx, next) => {
    try {
        const teams = await Teams.getTeams()

        ctx.successResponse(teams)
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

const update = async (ctx, next) => {
    try {
        Validation.updateTeam(ctx)
        await Teams.update()

        ctx.successResponse()
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

const remove = async (ctx, next) => {
    try {
        Validation.removeTeam(ctx)
        await Teams.create()

        ctx.successResponse()
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

const getOne = async (ctx, next) => {
    try {
        Validation.getOneTeam(ctx)
        await Teams.getTeams()

        ctx.successResponse()
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
