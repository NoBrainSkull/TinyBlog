import Koa from 'koa'
import serveStatic from 'koa-static'
import Chalk from 'chalk'
import RoutesHome from './routes/home'
import Mock from './routes/mock'

export const app = new Koa()

const port = 3000

// serve static app
app.use(serveStatic(`${__dirname}/public/`))

// serve api
app.use(Mock.routes(), Mock.allowedMethods())
app.use(RoutesHome.routes(), RoutesHome.allowedMethods())

app.listen(port, () => {
    Chalk.green(console.log(`Server Started ∹ http://localhost:${port}`));
})