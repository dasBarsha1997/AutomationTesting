import { test, expect } from '@playwright/test'
test('Element state methods', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    ///click()---clicking on the element
    let openwindowButton = await page.locator('#openwindow')
    await openwindowButton.click()

    // dblclick()--double click on the element
    let opentabButton = await page.locator('#opentab')
    await opentabButton.dblclick()

    // fill()--filling the value in the input field
    let inputE = await page.locator('#autocomplete')
    await inputE.fill('india')

    // type()--filling the value in the input field with delay--deprecated
    let inputEType = await page.locator('#autocomplete')
    await inputEType.type('in')

    // press()--pressing a key
    let inputEType1 = await page.locator('#autocomplete')
    await inputEType1.fill('Ar')
    await inputEType1.press('ArrowDown')
    await inputEType1.press('Enter')

    // checkbox- check() and uncheck()
    let checkBoxOne = await page.locator('#checkBoxOption1')
    let checkBoxTwo = await page.locator('#checkBoxOption2')
    let checkBoxThree = await page.locator('#checkBoxOption3')
    await checkBoxOne.click()
    await checkBoxOne.check()
    await checkBoxTwo.check()
    await checkBoxThree.check()
    let expectedValue = await checkBoxOne.isChecked()
    await expect(expectedValue).toBeTruthy()

    await checkBoxOne.uncheck()
    let expectedValue2 = await checkBoxOne.isChecked()
    await expect(expectedValue2).toBeFalsy()
    await checkBoxTwo.uncheck()
    await checkBoxThree.uncheck()

    // radio button
    let radioButtonOne = await page.locator("input[value='radio1']")
    let radioButtonTwo = await page.locator("input[value='radio2']")
    await radioButtonOne.check()
    let expectedValue3 = await checkBoxOne.isChecked()
    await expect(expectedValue3).toBeTruthy()
    let expectedValue4 = await radioButtonTwo.isChecked()
    await expect(expectedValue4).toBeFalsy()

    // drop down 
    let selectDropDown = await page.locator('#dropdown-class-example')

    await selectDropDown.selectOption('option1'); 
    // value / index / Text

    let hoverElement = await page.locator('#mousehover')
    hoverElement.hover()

    //mousehover
    await page.locator('#mousehover').scrollIntoViewIfNeeded();
    await page.locator('#mousehover').hover();

    // screenshot()
    await page.locator('#mousehover').screenshot({ path: 'C:/Users/chinm/playwrightjs/screenhots/table.png' })


});