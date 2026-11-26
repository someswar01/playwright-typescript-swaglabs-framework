import { Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage';
import { getRequiredEnv } from '../utils/ConfigReader';
import { Logger } from '../utils/Logger';

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    username = '#user-name';
    password = '#password';
    loginBtn = '#login-button';

    get errorMessage() {
        return this.page.locator('[data-test="error"]');
    }

    get loginButton() {
        return this.page.locator(this.loginBtn);
    }

    async loginAsStandardUser() {
        Logger.info("Login Starts");
        await this.login(
            getRequiredEnv('SWAGLABS_APP_USERNAME'),
            getRequiredEnv('SWAGLABS_APP_PASSWORD')
        );
    }

    async login(username: string, password: string) {
        Logger.info("Entering Username");
        await this.enterText(this.username, username);

        Logger.info("Entering Password");
        await this.enterText(this.password, password);
        
        Logger.info("Click on login")
        await this.click(this.loginBtn);
    }

}