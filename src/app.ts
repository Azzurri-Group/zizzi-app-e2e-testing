import Koa from 'koa';
import helmet from 'koa-helmet';
import cors from '@koa/cors';
import logger from '@azzurri-group/logger';
import router from './routes';

const app = new Koa();

// prettier-ignore
app
  .use(helmet())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

app.on('error', (error: Error) => {
  logger.error({ error }, 'uncaught exception');
});

export default app;
