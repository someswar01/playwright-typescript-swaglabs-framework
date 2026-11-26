import { test, expect } from '../fixtures/baseFixture';

test.beforeEach(async ({ page, loginPage }) => {

    await page.goto('/');

    await loginPage.loginAsStandardUser();

});

test('@Regression @Smoke Add Product To Cart', async ({ page,inventoryPage }) => {

    await inventoryPage.addBackpackToCart();

    await expect(inventoryPage.cartBadge).toHaveText('1');
});

test('@Regression @Smoke Verify Logout Functionality', async ({ page, inventoryPage, loginPage }) => {

    await inventoryPage.clickMainMenuBtn();
    await inventoryPage.clickOnLogOutButton();

    await expect(page).toHaveURL(/\/$/);
    await expect(loginPage.loginButton).toBeVisible();
});

test('@Regression @Smoke Remove Product From Cart', async ({ page,inventoryPage }) => {

    await inventoryPage.addBackpackToCart();

    await inventoryPage.removeBackPackFromCart();

    await expect(
        inventoryPage.cartBadge
    ).toHaveCount(0);

});

test('@Regression @Smoke Sort Products By Price Low To High', async ({ inventoryPage }) => {

    await inventoryPage.sortByPriceLowToHigh();

    const prices = await inventoryPage.getProductPrices();
    expect(prices.length).toBeGreaterThan(0);
    expect(prices.every(Number.isFinite)).toBe(true);
    expect(prices).toEqual([...prices].sort((first, second) => first - second));

});