import { Locator, Page } from '@playwright/test';
import fs from 'fs';
import csv from 'csv-parser';

export class CommonUtils {
    private page: Page;

    constructor(page?: Page) {
        this.page = page;
    }

    async fillInput(locator: Locator, value: string) {
        await locator.fill(value);
        await this.page.waitForTimeout(1000);
    }

    async clickAndWait(locator: Locator) {
        await locator.click();
        await this.page.waitForTimeout(1000); 
    }

    async selectGender(locator: Locator, gender: string) {
        const genderLower = gender.toLowerCase();

        if (genderLower === 'mr' || genderLower === 'ms') {
            await locator.check();
            await this.page.waitForTimeout(1000);
        } else {
            throw new Error("Invalid gender. Choose 'MR' or 'MS'.");
        }
    }
   async readCSV(filePath: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
        const results: any[] = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
}

}
