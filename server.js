import Koa from 'koa'
import serveStatic from 'koa-static'
import Chalk from 'chalk'
import Home from './routes/home'

export const app = new Koa()

const port = 3000

// serve static app
app.use(serveStatic(`${__dirname}/public/`))

// serve api
app.use(Home.routes(), Home.allowedMethods())

app.listen(port, () => {
    Chalk.green(console.log(`Server Started ∹ http://localhost:${port}`));
})