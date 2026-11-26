import { Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage';
import { Logger } from '../utils/Logger';

export class CartPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    cartLink = '.shopping_cart_link';

    checkoutBtn = '#checkout';

    continueShoppingBtn = '#continue-shopping';

    removeBtn = '#remove-sauce-labs-backpack';

    productName = '.inventory_item_name';

    get productNames() {
        return this.page.locator(this.productName);
    }

    get cartItems() {
        return this.page.locator('.cart_item');
    }

    async clickOnCart() {
        Logger.info("Click on Cart Link");
        await this.click(this.cartLink);
    }

    async clickOnCheckout() {
        Logger.info("Click on Check Out Button ");
        await this.click(this.checkoutBtn);
    }

    async clickOnContinueShopping() {
        Logger.info("Click on continue Shopping Btn ");
        await this.click(this.continueShoppingBtn);
    }

    async removeProduct() {
        Logger.info("Click on Remove Btn ");
        await this.click(this.removeBtn);
    }
}