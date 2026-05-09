//@ts-check

import { test, expect } from '@playwright/test';

test.describe("AutomationPractice page tests", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    });

    test("Validate the header of the page", async ({ page }) => {
        let header = await page.locator("h1").textContent();
        await expect(header).toBe("Practice Page");
    });

    test("Validate the CheckBox using Enabled Method", async ({ page }) => {
       
        let checkbox1 = await page.locator('input[value="option1"]');
        let expectValue1 = await checkbox1.isEnabled();
        console.log(expectValue1);
        await expect(expectValue1).toBeTruthy();
    });
    test("Validate the CheckBox using Disabled Method", async ({ page }) => {
        
        let checkbox1 = await page.locator('input[value="option1"]');
        let expectValue1 = await checkbox1.isDisabled();
        console.log(expectValue1);
        await expect(expectValue1).toBeFalsy();

    });

    test("Validate the CheckBox using Hidden Method", async ({ page }) => {
       
        let checkbox1 = await page.locator('input[value="option1"]');
        let expectValue1 = await checkbox1.isHidden();
        console.log(expectValue1);
        await expect(expectValue1).toBeFalsy();
        await checkbox1.click();

        let expectValue2 = await checkbox1.isHidden();
        console.log(expectValue2);
        await expect(expectValue2).toBeFalsy();
    });

    test("Validate the Radio button using Checked Method", async ({ page }) => {
      
        let checkbox1 = await page.locator('input[value="option1"]');
        let expectValue1 = await checkbox1.isChecked();
        console.log(expectValue1);
        await expect(expectValue1).toBeFalsy();
        await checkbox1.click();
        let expectValue2 = await checkbox1.isChecked();
        console.log(expectValue2);
        await expect(expectValue2).toBeTruthy();
    });


});