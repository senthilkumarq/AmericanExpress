import { Page, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    page.on('response', async () => {
        try {
            const cookieButton = page.locator('button:has-text("Accepter")');
            if (await cookieButton.isVisible()) {
                await cookieButton.click();
            }
        } catch (error) {
            
        }
    });
});
test.afterEach(async ({ page }) => {
    await page.close()
  
});