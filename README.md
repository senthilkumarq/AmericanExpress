Playwright UI Test Framework

Overview
   This repository contains a Playwright-based UI Test Automation Framework designed to validate the FR Credit Card Applications Flow. The framework follows best practices for modular design, page object models (POM), CSV-based test data handling, and Allure reporting for enhanced test execution insights.

   We use spec files (.spec.ts) to write test scripts, ensuring better organization and maintainability of test cases. Each test scenario is written inside a dedicated spec file under the tests/ folder, leveraging Playwright’s test.describe and test() structure.

 Features
 ========
    -  Playwright for E2E UI testing
    -  Page Object Model (POM) for maintainability
    -  Test data handling using CSV
    -  Allure & HTML Reporting
    -  GitHub Actions for CI/CD

Install dependencies
====================
    playwright Installation 
             => npm init Playwright@latest
    Csv Installation 
             => npm install --save-dev @playwright/test csv-parser
    Install Allure Reporting 
             => npm install --save-dev @playwright/test allure-playwright

CI/CD (GitHub Actions)
=====================
    Automated tests run on push to main or master.
    Reports can be downloaded from GitHub Actions Artifacts.

Folder Structure
================
AmericanExpress
   Pages
       FRHomepage.ts
       FRAllCardsPage.ts
       GoldCardDescriptionPage.ts
       UserDetailsPage.ts
   utils
      CommonUtils.ts
      hooks.ts
   data
      testData.csv
   tests
     creditCardApplication.spec.ts
   package.json
   playwright.config.ts
   .github
       workflows
	        playwright.yml
   allure-results
   README.md

Folder & File Descriptions
==========================
Pages/               →  Contains Page Object Model (POM) files for different UI components.
utils/               →  Utility functions such as CSV parsing and test hooks.
data/                →  Stores test data in CSV format.
tests/               →  Playwright spec files (.spec.ts) for writing test cases.
playwright.config.ts →  Configuration file for Playwright settings.
README.md            →  Documentation for the framework.





