import staticConfig from 'config';
import logger from '@azzurri-group/logger';
import app from './app';

const port = process.env.PORT || staticConfig.get('server.defaultPort');

const server = app.listen(port, () => {
  logger.info({ port }, 'server listening');
  logger.info('Environment : ', process.env.NODE_ENV);
});

export default server;
