import {test, expect} from 'playwright/test'

test.only('Locctor validate', async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
  // Element info methods

  //count()--it will give the count of the element
   let checkboxCount=await page.locator('input[type="Checkbox"]').count()

   console.log("Total checkbox count is "+checkboxCount)
   await expect(checkboxCount).toBe(3)


  //alltextContent()--it will give the text of the element

 let row=await page.locator('#product').first().locator('tr').nth(1).locator('td').allTextContents();

 console.log("Text is "+row)

 expect(row[0]).toBe("Rahul Shetty")

 
 let text1=await page.locator('#product').last().locator('tr').first().locator('th').allTextContents();

 console.log("Text is "+text1)

 expect(text1.length).toBeGreaterThan(1);


//allInnerText()--it will give the text of the element

let getText= await page.locator('label').allInnerTexts()

console.log("Text is "+getText)

expect(getText[getText.length-1]).toContain("Option3")


//textContent()--it will give the text of the element

let getContentText= await page.locator('legend').nth(2).textContent()

console.log("Text is "+getContentText)

expect(getContentText).toBe("Dropdown Example")

//innerText()--it will give the text of the element

let getInnerText= await page.locator('legend').nth(1).innerText()
console.log("Text is "+getInnerText)

expect(getInnerText).toBe("Suggession Class Example")

//inputText()--it will give the text of the element

let enterText=await page.locator('#name').fill("Rahul Shetty");
 let getInputText=await page.locator('#name').inputValue();
console.log("Input text is:", getInputText);
expect(getInputText).toBe("Rahul Shetty")

//getAttribute()--it will give the attribute value of the element

let attributeValue=await page.locator('#displayed-text').getAttribute('placeholder')
console.log("Attribute value is "+attributeValue)

expect(attributeValue).toBe("Hide/Show Example");

    // <h1 display= "none">heading</h1>
    // <h1 display= "block">heading</h1>
    // Figma -- html css --> webpage , tab , mobile 
//boundBox()--it will give the x,y coordinates and height and width of the element
 let box=await page.locator('#displayed-text').boundingBox();
  console.log(box);
   expect(box.width).toBeCloseTo(182,0)
 // expect(box.width).toBe(182.4000244140625)

let box1 = await page.locator('h1').boundingBox()
    console.log(box1)
    // assertion
    expect(box1.height).toBe(48)

});