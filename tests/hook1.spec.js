//test
//only
//skip
//fail
//fixme
//slow
//describe

import { describe } from 'node:test';
import {test,expect} from 'playwright/test'
 
test.describe('Hooks in Playwright', ()=>
{
test('Test Cases1',async({page})=>
{

    console.log("Test Case 1");
})

// test.only('Test Cases2',async({page})=>
// {

//     console.log("Test Case 2");
// })

test.skip('Test Cases3',async({page})=>
{

    console.log("Test Case 3");
})
test.fail('Test Cases4',async({page})=>
{

    console.log("Test Case 4");
    expect(1).toBe(2);
})
test.fixme('Test Cases5',async({page})=>
{

    console.log("Test Case 5");
})
test('Test Cases6', async ({ page }) => {
   console.log("Test Case 6");
    test.slow();
})

})
