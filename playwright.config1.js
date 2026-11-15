// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries:1,
  workers:3,
  timeout: 30*1000,
  expect:{
    timeout:12_000,
  },
  reporter:'html',
  projects:[
    {
    name: 'chrome execution',
  use: {
    browserName:'chromium',
    actionTimeout: 30 * 1000,
    navigationTimeout: 30 * 1000,
    headless: false,
    video:'on',
    trace:'on',
    screenshot:'on',
    ignoreHttpsErrors: true,
    permissions:['geolocation'],
    //viewport:{height:720, width:300},              // let the browser use the OS window size, not a fixed viewport
    //...devices['BlackBerry Z30'],
    launchOptions: {
      args: ['--start-maximized'] // tells Chrome to open maximized
    },
  },
  },
  { 
  name: 'safari execution',
  use: {
     browserName:'webkit',
    actionTimeout: 30 * 1000,
    navigationTimeout: 30 * 1000,
    headless: true,
    trace:'on',
    ...devices['iPhone 13'],
    screenshot:'on',
          
},
  },
],
});

