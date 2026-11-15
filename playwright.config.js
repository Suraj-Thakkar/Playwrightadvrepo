// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  timeout: 30*1000,
  expect:{
    timeout:12_000,
  },
  reporter:'html',
  use: {
    browserName:'chromium',
    actionTimeout: 30 * 1000,
    navigationTimeout: 30 * 1000,
    headless: true,
    trace:'on',
    screenshot:'on',
    viewport: null,              // let the browser use the OS window size, not a fixed viewport
    launchOptions: {
      args: ['--start-maximized'] // tells Chrome to open maximized
    },
  },
});

