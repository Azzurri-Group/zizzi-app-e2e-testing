import Router from '@koa/router';

const healthRouter = new Router({
  prefix: '/health',
});

healthRouter.get('/', (ctx) => {
  ctx.body = 'Status OK';
});

export default healthRouter;
