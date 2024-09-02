const { test, expect } = require('@playwright/test');


test('First playwright test', async ({ browser }) => {

    const context = await browser.newContext(); //open incognito browser in Playwright
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log(await page.title());


});


test.only('Page playwright test', async ({ page }) => {

    // const context = await browser.newContext(); //open incognito browser in Playwright
    // const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log(await page.title());
    await expect(page).toHaveTitle("OrangeHRM");



});