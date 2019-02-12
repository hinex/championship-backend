const Router = require('koa-router')
const Countries = require('./countries')
const Teams = require('./teams')

const router = new Router()

router
    .get('/countries/', Countries.getList)
    .post('/countries/create', Countries.create)
    .put('/countries/update', Countries.update)
    .del('/countries/delete', Countries.remove)

router
    .get('/teams/', Teams.getList)
    .post('/teams/create', Teams.create)
    .put('/teams/update', Teams.update)
    .del('/teams/delete', Teams.remove)
    .get('/teams/:id', Teams.getOne)

module.exports = router
