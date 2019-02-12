const Koa = require('koa')
const Config = require('config')
const Contollers = require('./contollers')
const Responces = require('./services/responcies')

const app = new Koa()

app.context.successResponse = Responces.successResponse
app.context.errorResponse = Responces.errorResponse

app
    .use(Contollers.routes())
    .use(Contollers.allowedMethods())
    .listen(Config.get('General.port'))
