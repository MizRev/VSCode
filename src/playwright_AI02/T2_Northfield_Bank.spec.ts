import { Page, test } from '@playwright/test';
import {click, clickByIndex, getTextByIndex, switchToTab, tabByClick, type, typeByIndex } from '../Reusable_Actions';

test('forgotPasswordTest @ai', async ({ page })=> {

    //navigate to Northfield Bank website
    await page.goto('https://www.enorthfield.com/');

    //click on the login button
    await clickByIndex(page, 'text=Login', 1, 'Login Button');

    //wait a few seconds
    await page.waitForTimeout(5000);

    //Switch to tab
    let NFB = await tabByClick(page, '//*[text()="Forgot Password "]', 'Forgot Password Link');
   
    //wait a few seconds
    await NFB.waitForTimeout(2000);
    
    //enter invalid user id
    await typeByIndex(NFB, '[type="text"]', 1, 'LarryGSBho', 'User ID Field');

    //click submit button
    await clickByIndex(NFB, '[aria-label="Submit"]', 1, 'Submit Button');

    //capture error message
    let errorMesssage = await getTextByIndex(NFB, '[type="error"]', 0, 'Error Message');
    console.log('\n\nError Message: ', errorMesssage);
    
});