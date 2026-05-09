import { test, expect } from 'playwright/test'

test.beforeEach(async function ({ page }) {
    console.log("before each test case");

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
})
test('Validate te assertions', async ({ page }) => {

    //toBevisible

    let openTab = await page.locator('#opentab');
    await openTab.waitFor({ state: 'visible' });
    expect(openTab).toBeVisible();
    let inputText = await page.locator('#name')
    // toBeHidden()
    let topLink = await page.locator('//a[text()="Reload"]')
    await expect(topLink).toBeHidden()

        //toHaveText()

        await inputText.fill('rahul');
    await expect(inputText).toHaveValue('rahul')

    let radiobtn1=await page.locator('//input[@name="radioButton"]')
        await expect(radiobtn1.first()).toHaveValue('radio1');
        await expect(radiobtn1.nth(1)).toHaveValue('radio2');
        await expect(radiobtn1.nth(2)).toHaveValue('radio3');

        // ToHaveAttribute

        let placeholder=await page.locator('#name')
        await expect(placeholder).toHaveAttribute('placeholder','Enter Your Name')

        // toHaveClass

        let className=await page.locator('#name')
        await expect(className).toHaveClass('inputs')

         //toBeChecked()

            let checkbox=await page.locator('input[type="checkbox"]')
            await checkbox.first().check();
            await expect(checkbox.first()).toBeChecked();
            await checkbox.first().uncheck();
            await expect(checkbox.first()).not.toBeChecked();
});