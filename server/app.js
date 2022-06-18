const Koa = require('koa')
const Cors = require('koa2-cors')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const checkData = function (ctx, next) {
  const start = new Date()
  await next()
  const time = new Date() - start
  console.log(`${ctx.method}: ${ctx.url}---${time}s`)
}

router.get('/', (ctx) => {
  ctx.body = '展示'
})

app.use(Cors())
app.use(checkData)
app.use(router.routes())

// koa 中间件只能用app.use，路由需要用koa-route
// app.use(async (ctx) => {
//   ctx.body = 'Hello'
// })

app.listen(3000, () => {
  console.log('监听3000， http://localhost:3000')
})
