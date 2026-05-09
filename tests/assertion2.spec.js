import { test, expect } from 'playwright/test'

test('validate the assertions', async ({ page }) => {
    // to HaveURL and toHaveTitle()
    await page.goto("https://sauce-demo.myshopify.com/")
    //Click on login link
    //await page.locator('#customer_register_link').click()--getting multiple elements with same locator
    await page.locator('#customer_register_link').first().click()
    //await expect(page).toHaveTitle("Account – Sauce Demo")---Account Changed to Create Account
    await expect(page).toHaveTitle("Create Account – Sauce Demo")
    //await expect(page).toHaveURL("https://sauce-demo.myshopify.com/account/login")---Login changed to register
    await expect(page).toHaveURL("https://sauce-demo.myshopify.com/account/register")


    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_button_disabled")
    let bodyContent = await page.frameLocator('#iframeResult')
    let buttonOne = await bodyContent.locator('button[type="button"]')
    await expect(buttonOne).toBeDisabled()
    await expect(await page.locator('#runbtn')).toBeEnabled()

})
