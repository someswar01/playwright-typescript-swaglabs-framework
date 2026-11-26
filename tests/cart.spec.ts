import { test, expect } from '../fixtures/baseFixture';

test.beforeEach(async ({ page, loginPage }) => {

    await page.goto('/');

    await loginPage.loginAsStandardUser();

});

test('@Regression @Smoke Verify Product Added To Cart', async ({ page,inventoryPage,cartPage }) => {

    await inventoryPage.addBackpackToCart();

    await cartPage.clickOnCart();

    await expect(
        cartPage.productNames
    ).toHaveText(['Sauce Labs Backpack']);

});

test('@Regression @Smoke Remove Product From Cart', async ({ page,inventoryPage,cartPage }) => {

    await inventoryPage.addBackpackToCart();

    await cartPage.clickOnCart();

    await cartPage.removeProduct();

    await expect(
        cartPage.cartItems
    ).toHaveCount(0);

});

test('@Regression @Smoke Verify Continue Shopping Button', async ({ page,inventoryPage,cartPage }) => {

    await inventoryPage.addBackpackToCart();

    await cartPage.clickOnCart();

    await cartPage.clickOnContinueShopping();

    await expect(page).toHaveURL(/\/inventory\.html$/);

});