describe('Welcome Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should show the welcome screen', async () => {
    await expect(element(by.text('Welcome'))).toBeVisible();
  });
});