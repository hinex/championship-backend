const Teams = require('../repositories/teams')

const create = async (ctx, next) => {
    try {
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
        await Teams.create()

        ctx.successResponse()
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

const remove = async (ctx, next) => {
    try {
        await Teams.create()

        ctx.successResponse()
    } catch (e) {
        ctx.errorResponse(e)
    }

    return next()
}

const getOne = async (ctx, next) => {
    try {
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
