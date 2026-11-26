import dotenv from 'dotenv';
dotenv.config();

import { defineConfig, devices } from '@playwright/test';
import { getRequiredEnv } from './utils/ConfigReader';

const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright']
  ],

  use: {
    baseURL: getRequiredEnv('SWAGLABS_BASE_URL'),
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

  ]
});