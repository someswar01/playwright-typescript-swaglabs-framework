import { Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage';
import { Logger } from '../utils/Logger';

export class InventoryPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    addBackpackBtn = '#add-to-cart-sauce-labs-backpack';
    mainMenuBtn = '#react-burger-menu-btn';
    logOutLink = '#logout_sidebar_link';
    removeBackPackBtn ='#remove-sauce-labs-backpack';
    sortDropdown = '.product_sort_container';
    productPrices = '.inventory_item_price';

    get cartBadge() {
        return this.page.locator('.shopping_cart_badge');
    }

    async clickMainMenuBtn() {
        Logger.info("click on main menu button in Dashboard")
        await this.click(this.mainMenuBtn);
    }

    async clickOnLogOutButton(){
        Logger.info("click on logout button in Dashboard")
        await this.click(this.logOutLink);
    }

    async addBackpackToCart() {
        Logger.info("Selecting backpack item ")
        await this.click(this.addBackpackBtn);
    }

    async removeBackPackFromCart() {
        Logger.info("Remove backpack item from cart ")
        await this.click(this.removeBackPackBtn);
    }

    async sortByPriceLowToHigh() {
        await this.page
            .locator(this.sortDropdown)
            .selectOption('lohi');
    }

    async getProductPrices(): Promise<number[]> {
        const priceTexts = await this.page.locator(this.productPrices).allTextContents();
        return priceTexts.map(price => Number(price.replace('$', '').trim()));
    }

}