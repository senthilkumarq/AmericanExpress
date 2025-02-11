import { Page, Locator } from '@playwright/test';

export class FRHomepage {
    private page: Page;
    private cookieButton: Locator;
    private cartesAmericanExpress: Locator;

    constructor(page: Page) {
        this.page = page;

        // Define locators inside the constructor
        this.cookieButton = page.locator('button:has-text("Accepter")');
        this.cartesAmericanExpress = page.getByText("Cartes American Express®");
    }

    async navigate() {
        await this.page.goto('https://www.americanexpress.com/fr-fr/?inav=NavLogo');
    }

    async acceptCookies() {
        if (await this.cookieButton.isVisible()) {
            await this.cookieButton.click();
        }
    }

    async clickOnCartesAmericanExpress() {
        await this.cartesAmericanExpress.click();
    }
}
