import request from 'supertest';
import app from './app';

describe('Server', () => {
  const server = app.callback();

  describe('Exceptions', () => {
    test('An unknown url should return 404', async () => {
      const response = await request(server).get('/unknown');
      expect(response.status).toBe(404);
    });
  });

  describe('When calling the health endpoint', () => {
    test('should return 200', async () => {
      const response = await request(server).get('/health');
      expect(response.text).toBe('Status OK');
      expect(response.status).toBe(200);
    });
  });
});
