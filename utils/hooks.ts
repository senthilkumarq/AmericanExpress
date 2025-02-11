import { Page, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    page.on('response', async () => {
        const cookieButton = page.locator('button:has-text("Accepter")');
        if (await cookieButton.isVisible()) {
            await cookieButton.click();
        }
    });
    });


test.afterEach(async ({ page }) => {
    await page.close()
  
});

