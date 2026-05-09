import { test, expect } from '@playwright/test'

test('Validate Element State Methods', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    //isVisible()

    let header = await page.locator('h1');
    console.log("Heading text is:", await header.textContent());
    await expect(header).toBeVisible();

    //isEnabled()

    let radio1 = await page.locator("//input[@value='radio1']");

    let expectvalue1 = await radio1.isEnabled();
    console.log("Is radio button enabled:", expectvalue1);

    await expect(expectvalue1).toBeTruthy();

    radio1.click();

    let expectValue2 = await radio1.isEnabled();
    console.log("Is radio button enabled:", expectValue2);
    await expect(expectValue2).toBeTruthy();

    //isChecked()

    let checkbox1= await page.locator("//input[@value='option1']");

    let expectValue3 = await checkbox1.isChecked();
    console.log("Is checkbox checked:", expectValue3);
    await expect(expectValue3).toBeFalsy();
    checkbox1.click();
    let expectValue4 = await checkbox1.isChecked();
    console.log("Is checkbox checked:", expectValue4);
    await expect(expectValue4).toBeTruthy();




})