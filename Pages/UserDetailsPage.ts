import { Page, Locator } from '@playwright/test';
import { CommonUtils } from '../utils/CommonUtils';

export class UserDetailsPage {
    private page: Page;
    private titleMr: Locator;
    private titleMrs: Locator;
    private firstNameInput: Locator;
    private lastNameInput: Locator;
    private dateOfBirthInput: Locator;
    private mobileNumberInput: Locator;
    private emailInput: Locator;
    private saveAndContinueButton: Locator;

  private commonUtils: CommonUtils;

    constructor(page: Page) {
        this.page = page;
        this.commonUtils = new CommonUtils(this.page); // Initialize CommonUtils

        this.titleMr = page.locator("//*[@for='MR']");   // Male option
        this.titleMrs = page.locator("//*[@for='MS']"); // Female option
        this.firstNameInput = page.locator("#fieldControl-input-firstName");
        this.lastNameInput = page.locator("#fieldControl-input-lastName");
        this.dateOfBirthInput = page.locator("#fieldControl-input-dateOfBirth");
        this.mobileNumberInput = page.locator("#fieldControl-input-mobilePhoneNumber");
        this.emailInput = page.locator("#fieldControl-input-email");
        this.saveAndContinueButton = page.getByText("Sauvegarder et Continuer");
    }
    
    async fillUserDetails(title: string, firstName: string, lastName: string, dateOfBirth: string, mobileNumber: string, email: string) {
        await this.commonUtils.fillInput(this.firstNameInput, firstName);
        await this.commonUtils.fillInput(this.lastNameInput, lastName);
        await this.commonUtils.fillInput(this.dateOfBirthInput, dateOfBirth);
        await this.commonUtils.fillInput(this.mobileNumberInput, mobileNumber);
        await this.commonUtils.fillInput(this.emailInput, email);
        await this.commonUtils.selectGender(this.titleMr,title);
    }

    async submitForm() {
        await this.commonUtils.clickAndWait(this.saveAndContinueButton)
    }
}
