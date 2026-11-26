import { test, expect } from '../fixtures/baseFixture';

test('@Regression @Smoke Verify Login', async ({page,loginPage}) => {

    await page.goto('/');

    await loginPage.loginAsStandardUser();

    await expect(page).toHaveURL(/\/inventory\.html$/);

});

test('@Regression @Smoke Verify Negative Login Functionality', async ({ page,loginPage }) => {

    await page.goto('/');

    await loginPage.login(
        "standard_use",
        "secret_sauc"
    );

    
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(
        'Epic sadface: Username and password do not match any user in this service'
    );
});
