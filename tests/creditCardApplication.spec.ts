import { test } from '@playwright/test';
import { FRHomepage } from '../Pages/FRHomepage';
import { FRAllCardsPage } from '../Pages/FRAllCardsPage';
import { GoldCardDescriptionPage } from '../Pages/GoldCardDescriptionPage';
import { UserDetailsPage } from '../Pages/UserDetailsPage';
import { CommonUtils } from '../utils/CommonUtils';
import '../utils/hooks'; 


test.describe('Credit Card Application Flow', () => {

    test(`Validate UI elements`, async ({ page }) => {

        const homePage = new FRHomepage(page);
        const allCardsPage = new FRAllCardsPage(page);
        const goldCardPage = new GoldCardDescriptionPage(page);
        const userDetailsPage = new UserDetailsPage(page);

        await homePage.navigate();
        await homePage.acceptCookies();
        await homePage.clickOnCartesAmericanExpress();

        await allCardsPage.clickOnGoldCardLearnMore();
        await goldCardPage.clickOnApplyNow();

        const commonUtils = new CommonUtils();
        const data = await commonUtils.readCSV('data/testData.csv');
        let testData = data[0]; 

        await userDetailsPage.fillUserDetails(
            testData.title,
            testData.firstName, 
            testData.lastName, 
            testData.dateOfBirth, 
            testData.mobileNumber, 
            testData.email
        );
        await userDetailsPage.submitForm();

        await page.waitForTimeout(1000)
    });

});
