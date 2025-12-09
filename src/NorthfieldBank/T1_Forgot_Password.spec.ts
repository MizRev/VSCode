import { Page, test } from '@playwright/test';


test('forgotPasswordTest', async ({ page })=> {
    
    //navigate to Northfield.com home page
    await page.goto('https://www.enorthfield.com/');

    //click on the login button
    await page.locator('text=Login').nth(1).click();

    //click on the forgot password linknp
    await page.locator('//*[text()="Forgot Password "]').click();

    //swit to new pasword recovery tab
    const NFB = await page.context().waitForEvent('page');
    await NFB.waitForLoadState();
    
    //enter invalid user id
    await NFB.locator('[type="text"]').nth(1).fill('LarryGSBho');

    //click submit button
    await NFB.locator('[aria-label="Submit"]').nth(1).click();

    //capture error message
    let errorMesssage = await NFB.locator('[type="error"]').nth(0).textContent();
    console.log('Error Message: ', errorMesssage);
    

})//end of test