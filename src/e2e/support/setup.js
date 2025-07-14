// src/e2e/support/setup.js
beforeAll(async () => {
  await device.launchApp({ delete: true, newInstance: true });
});

afterAll(async () => {
  await device.terminateApp();
});