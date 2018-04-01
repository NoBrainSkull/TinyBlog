import Koa from 'koa'
import serveStatic from 'koa-static'
import Home from './routes/home'

export const app = new Koa()

app.use(serveStatic(`${__dirname}/public`))

app.use(Home.routes(), Home.allowedMethods())

app.listen(3000)