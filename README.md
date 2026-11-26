Playwright TypeScript Automation Framework - SauceDemo
Overview
This project is a Playwright automation framework built using TypeScript and follows the Page Object Model (POM) design pattern.

The framework automates end-to-end test scenarios for the SauceDemo application.

Application Under Test:

https://www.saucedemo.com/

Tech Stack
Playwright
TypeScript
Node.js
JSON Test Data
Page Object Model (POM)
Custom Fixtures
Git & GitHub
Framework Features
✅ Page Object Model (POM)

✅ Base Page Implementation

✅ Environment Variable Configuration (.env)

✅ JSON Test Data Management

✅ Custom Fixtures

✅ beforeEach Hooks

✅ Custom Logging Utility

✅ Smoke & Regression Tags

✅ Cross Browser Execution

✅ HTML Reporting

✅ Screenshots on Failure

✅ Video Recording on Failure

✅ Trace Collection on Failure

Project Structure
PlayWrightWithTypescriptSwagLabsDemo
│
├── pages
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── fixtures
│   └── baseFixture.ts
│
├── test-data
│   └── checkoutData.json
│
├── tests
│   ├── login.spec.ts
│   ├── inventory.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── utils
│   ├── BasePage.ts
│   └── Logger.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── .env
Test Scenarios Covered
Login
Verify Successful Login
Verify Invalid Login
Inventory
Add Product To Cart
Remove Product From Cart
Sort Products
Cart
Verify Product Added To Cart
Remove Product From Cart
Continue Shopping
Checkout
Complete Checkout Flow
Verify Order Success Message
Environment Setup
Create a .env file:

SWAGLABS_BASE_URL=https://www.saucedemo.com
SWAGLABS_APP_USERNAME=standard_user
SWAGLABS_APP_PASSWORD=secret_sauce
Installation
npm install
Install Playwright browsers:

npx playwright install
Execute Tests
Run all tests:

npx playwright test
Run smoke tests:

npx playwright test --grep "@smoke"
Run regression tests:

npx playwright test --grep "@regression"
Run Chrome only:

npx playwright test --project=chromium
Run Firefox only:

npx playwright test --project=firefox
Generate HTML Report
npx playwright show-report
Author
Somesh

Automation Test Engineer