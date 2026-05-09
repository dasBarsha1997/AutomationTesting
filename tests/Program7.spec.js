import { test, expect } from 'playwright/test'

test('Validate the iFrame method', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")



    // element in iframe--its not in main page so we have to switch to that frame and then we can access the element
    // let elementFrame = await page.locator('h2').first()    
    //console.log(elementFrame.textContent())

    // iFrame method

    let frameText = await page.frameLocator('#courses-iframe').locator('h2').first().innerText();

    console.log("Text is " + frameText)
    // frame object --- content frame
    let iframeElement = page.locator('#courses-iframe')
    const frame = await iframeElement.contentFrame()
    console.log(frame)
});