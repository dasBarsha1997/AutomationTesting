import { test, expect } from '@playwright/test'

test('Validate Locators', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    let s = await page.title();

    console.log("Title text is:", s);

    await expect(s).toEqual("Practice Page");

    //Find the locator for the input field and fill the value as "Playwright JS"
    //Id

    await page.locator('#autocomplete').fill("India");

    //Css
    await page.locator("input[value='Alert']").click();

    //Xpath
    await page.locator("//input[@Value='Show']").click();

    //getByPlaceholder

    await page.getByPlaceholder("Enter Your Name").fill("Playwright JS");

    //getByLabel
    await page.getByLabel(' Radio1 ').check();


//getByText()
    await page.getByText('Open Window').click(); 

// GetByRole()

await page.getByRole
await page.getByRole('checkbox', { name: "Option1" }).click();


}
)
