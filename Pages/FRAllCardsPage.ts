import { Page, Locator } from '@playwright/test';

export class FRAllCardsPage {
    private page: Page;
    private goldCardLearnMore: Locator;

    constructor(page: Page) {
        this.page = page;
        this.goldCardLearnMore = page.locator("(//h2[contains(text(),'Carte Gold American Express')]/preceding::div[@class='card-art parbase'])[2]/following-sibling::div//span[text()='En savoir plus']");
    }

    async clickOnGoldCardLearnMore() {
        await this.goldCardLearnMore.click();
    }
}
