// src/e2e/tests/welcome.e2e.ts
describe('Welcome Screen', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('should display the welcome title', async () => {
    await expect(element(by.text('Welcome to Zizzi'))).toBeVisible();
  });
});