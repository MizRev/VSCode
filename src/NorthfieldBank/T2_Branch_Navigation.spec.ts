import { Page, test } from '@playwright/test';

test('forgotPasswordTest', async ({ page })=> {

    //declare arraylist for zipcodes
    let zipcodes = new Array<string>()
    zipcodes.push('33065')
    zipcodes.push('33312')
    for(let i=0; i<zipcodes.length; i++){

        //navigate to Northfield.com home page
         await page.goto('https://www.enorthfield.com/');

        //click find a branch at the top of the page
        await page.locator("//*[text()='Find a Branch']").click();

        



    }//end of for loop
    
    
})//end of test