import { Page } from '@playwright/test';
import { Logger } from '../utils/Logger';

export class BasePage {

    constructor(protected page: Page) {}

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async enterText(locator: string, value: string) {
    Logger.info(`Entering text into locator: ${locator}`);
    await this.page.locator(locator).fill(value);
    }

    async click(locator: string) {
    Logger.info(`Clicking on locator: ${locator}`);
    await this.page.locator(locator).click();
    
}
}