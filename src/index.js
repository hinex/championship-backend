const Koa = require('koa')
const Config = require('config')
const Controllers = require('./controllers')
const Responses = require('./services/responses')
const Validator = require('koa-request-validation')
const BodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');

const app = new Koa()

app.context.successResponse = Responses.successResponse
app.context.errorResponse = Responses.errorResponse

if (Config.get('General.cors')) {
    app.use(cors())
}

app.use(BodyParser())
app.use(Validator())
app
    .use(Controllers.routes())
    .use(Controllers.allowedMethods())
    .listen(Config.get('General.port'))
