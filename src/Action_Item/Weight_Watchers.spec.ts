import { Page, test } from '@playwright/test';


test ('Find classes on WeightWatchers @smoke', async ({ page }) => {
    //declare arraylist for Zip codes
    let zipCodes = new Array<string>()
    zipCodes.push('33065')
    zipCodes.push('33312')
    

    for(let i=0; i<zipCodes.length; i++){
        //navigate to weight watchers
        await page.goto('https://www.weightwatchers.com/')

        //click on find a workshop link
        await page.locator('[icon="location"]').click();

        //enter zip code
        await page.locator('input[id="location-search"]').fill(zipCodes[i])

        //click on search button
        await page.locator('button[type="submit"]').click();

        //scroll to see the first studio result
        await page.locator("[class='showHideFilters-XPYCU']").scrollIntoViewIfNeeded();

        //store the locatons as a webelement list
        let studioList = page.locator("[class='container-k2b9Z']");

        //wait for few seconds
        await page.waitForTimeout(5000);

        //click on the first studio result
        await studioList.nth(0).click();

        //capture the studio name and address and print it on console
        let studioAddress = await page.locator("[class='infoContainer-SM1i_']").textContent();
        console.log('For zip code ' + zipCodes[i] + ' Studio Name: ' + studioAddress);

        //scroll into webelement contains text for wrokshop schedule
        await page.locator('[class="title-UbUc9"]').scrollIntoViewIfNeeded();

        //capture the workshop schedule and print it on console
        let workshopSchedule = await page.locator('[id="studioWorkshopSchedule"]').textContent();
        console.log('Workshop Schedule: ' + workshopSchedule);


    }//end of for loop
})//end of test 2