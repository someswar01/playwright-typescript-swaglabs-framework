import { test, expect } from '../fixtures/baseFixture';


test.beforeEach(async ({ page, loginPage }) => {

    await page.goto('/');

    await loginPage.loginAsStandardUser();

});

test('@Regression @Smoke Complete Checkout Flow', async ({
    inventoryPage,
    cartPage,
    checkoutPage,
    checkoutTestData
}) => {
    await inventoryPage.addBackpackToCart();

    await cartPage.clickOnCart();

    await cartPage.clickOnCheckout();

    await checkoutPage.completeCheckout(
        checkoutTestData.firstName,
        checkoutTestData.lastName,
        checkoutTestData.postalCode
    );

    await checkoutPage.clickFinish();

    await expect(checkoutPage.completionHeader).toHaveText('Thank you for your order!');
});