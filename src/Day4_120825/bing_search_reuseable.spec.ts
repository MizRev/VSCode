import { Page, test } from '@playwright/test';
import { click, getText, type } from '../Reusable_Actions';

let page: Page;

test.beforeAll(async ({ browser }) => {
    //create a new page instance
    page = await browser.newPage();
});


test('search for playwright keyword on bing', async ({})=> {
    
    //navigate to bing home page
    await page.goto('https://www.bing.com');

    //wait for few seconds
    await page.waitForTimeout(3000);

    //type playwright keyword on search box
    await type(page, '[name="q"]', 'Playwright Testing', 'Bing Search Box');

    await page.keyboard.press('Enter');
});//end of test

test('capture search number', async ({})=> {
    
    //capture search results text
    let searchResult = await getText(page, '[class="sb_count"]', 'Search Results Text');
    console.log('Search Results: ' + searchResult);
    let searchNumber = searchResult.split(' ');
    console.log('Search Number: ' + searchNumber[1]);

});//end of test