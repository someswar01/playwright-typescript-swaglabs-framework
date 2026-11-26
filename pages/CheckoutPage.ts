import { Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage';
import { Logger } from '../utils/Logger';

export class CheckoutPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    firstNameTxt = '#first-name';
    lastNameTxt = '#last-name';
    postalCodeTxt = '#postal-code';

    continueBtn = '#continue';
    finishBtn = '#finish';

    completeHeader = '.complete-header';

    get completionHeader() {
        return this.page.locator(this.completeHeader);
    }

    async enterFirstName(firstName: string) {
        Logger.info("Entering First Name ");
        await this.enterText(this.firstNameTxt, firstName);
    }

    async enterLastName(lastName: string) {
        Logger.info("Entering Last Name ");
        await this.enterText(this.lastNameTxt, lastName);
    }

    async enterPostalCode(postalCode: string) {
        Logger.info("Entering Postal code ");
        await this.enterText(this.postalCodeTxt, postalCode);
    }

    async clickContinue() {
        Logger.info("Click on continue ");
        await this.click(this.continueBtn);
    }

    async clickFinish() {
        Logger.info("Click on Finish button ");
        await this.click(this.finishBtn);
    }

    async completeCheckout(firstName: string,lastName: string,postalCode: string) {

        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterPostalCode(postalCode);
        await this.clickContinue();
    }
}