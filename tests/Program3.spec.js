import { test, expect } from '@playwright/test'

test('Validate heading Text', async ({ page }) => {

    console.log("Welcome to Playwright JS");

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    let webElement = await page.locator('h1');
    console.log("Validate the heading text as:", await webElement.textContent());
    let value = await webElement.textContent();
    await expect(value).toEqual("Practice Page");

    //<input id="name" name="enter-name" class="inputs" placeholder="Enter Your Name" type="text">
    await page.locator('#name');
    let inputElements = await page.locator('#name');
    await inputElements.fill("Playwright JS");

})