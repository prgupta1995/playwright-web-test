// @ts-check
const { defineConfig } = require('@playwright/test');

const config = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, // Global timeout for tests
  expect: {
    timeout: 5000 // Timeout for individual assertions
  },
  reporter: [['html', { open: 'never' }]], // Configure HTML reporter
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
    // browserName: 'chromium',
  },
});

module.exports = config;
