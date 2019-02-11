const Koa = require('koa')
const Config = require('config')
const Contollers = require('./contollers')

const app = new Koa()

app
    .use(Contollers.routes())
    .use(Contollers.allowedMethods())
    .listen(Config.get('General.port'))
