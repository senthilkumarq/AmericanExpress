import { Page, Locator } from '@playwright/test';

export class GoldCardDescriptionPage {
    private page: Page;
    private applyNowButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.applyNowButton = page.getByText("Demandez votre Carte").first();
    }

    async clickOnApplyNow() {
        await this.applyNowButton.click();
    }
}
