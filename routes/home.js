import Router from 'koa-router'

const router = new Router()
const todos = ['test']

router.get('/api', async ctx => {
  ctx.body = todos
})

export default router