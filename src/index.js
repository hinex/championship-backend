const Koa = require('koa')
const Config = require('config')

const app = new Koa()

app.listen(Config.get('General.port'))
