import {test,expect} from 'playwright/test'
 test.beforeEach(async ({ page }) => {
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    });
 test('validate the Evalute method', async({page})=>
{
    // program 1

    let type=await page.locator('#name').evaluate((el)=>el.type)
    console.log(type)

    let placeHolder=await page.locator('#name').evaluate((el)=> el.placeholder)
    console.log(placeHolder)

    let ID=await page.locator('#name').evaluate((el)=> el.id)
    console.log(ID)


  

}),

test('validate single elements attribute using Evaluate', async({page})=>
{

      // program 2
     // single elements attribute

     let q1=await page.locator('#name').evaluate((el)=>({
        type :el.type,
        ID:el.id,
        placeholder:el.placeholder
     }

     ))
    console.log(q1);
    }),

    test('validate multiple elements attribute using Evaluate', async({page})=>
    {

        //program3
        // multiple elements attribute(checkbox)
         let q2=await page.locator('input[type="checkbox"]').evaluateAll((els)=> els.map(function(el,index,arr)
        {

            return el.id;
        })) 
        console.log(q2);        
    }),

    test('validate the text of the element using Evaluate', async({page})=>
    {

        // program 4
        let q3=await page.locator('#product').first()
        .locator('tr').first().locator('th').evaluateAll((els)=>els.map((el,index ,arr)=>el.textContent))
        console.log(q3);

        await page.locator('#mousehover').evaluate(el=>el.scrollIntoView())
    });

    // evalute --- single element 
    // evalute --- multiple elements

    // Changing UI for debug
    //await page.locator('#name').evaluate(el=>el.style.border = "3px solid red")

    // scroll element manually
    

    // Scenario 

    // Need width/height           =====> evalute()
    // Need custome style          =====> evalute()
    // Need DOM    values          =====> evalute()
    // Need many element texts     =====> evaluteAll()
    // Need ids of all checkboxs   =====> evaluteAll()
    // filer   -----> map() , filter() , reduce(), forEach(),every(),some(),find(),findIndex()

    test.only('validate the array  methods', async ({ page }) => 
        {

            let price=await page.locator('#product')
            .first().locator('tr td:nth-child(3)')
            .evaluateAll((els)=>els.map((el)=>Number(el.textContent)))
            console.log(price);
            let q4=price.reduce(function(acc,el)
            {
                return acc+el;
            },0)
            console.log(q4);


            let cities= await page.locator('#product')
            .last().locator('tr')
            .locator('td:nth-child(2)').evaluateAll((els)=>els.map((el)=>el.textContent))
            console.log(cities);
            let result = cities.some((el)=>el == "Chennai")
    console.log(result)
    //await expect(result).toBe(true)
    
    // Test ---> Arrangement ---> action and assertion

    let citiesE = await page.locator('#product')
    .last()
    .locator('tr td:nth-child(3)') // [el,el,el,el] ==> [el,el]
    .evaluateAll(els => els.filter(el=>el.textContent.trim() == "Chennai"))
    console.log(citiesE)

        });
        