const { test, expect } = require('@playwright/test');

test('Verify the page title of OrangeHRM login page', async ({ page }) => {
    await page.goto('/'); // This uses the baseURL
    console.log(await page.title());
    await expect(page).toHaveTitle("OrangeHRM");
});