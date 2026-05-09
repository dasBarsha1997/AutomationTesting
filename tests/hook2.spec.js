import { test, expect } from 'playwright/test'

test.describe('Login Module', () => {

    test.beforeAll(async() => { 
        console.log('Connect to DB')
    })
    test.beforeEach(async ({ page }) => {
        console.log('Launch the url')
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    })
    test('Validate the title of the page', async ({ page }) => {
        console.log('Validate the title of the page')
        await expect(page).toHaveTitle('Practice Page')
    })
    test.afterEach(async ({page}) => {
        console.log('Logout from the application')
        page.close();
    })
    test.afterAll(async () => {
        console.log('Disconnect from DB  ')
    })

})
