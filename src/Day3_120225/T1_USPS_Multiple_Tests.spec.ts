import { Page, test } from '@playwright/test';


test ('Mouse hover to quick tools module and select track a package on USPS @smoke', async ({ page }) => {
    //navigate to USPS
    await page.goto('https://www.usps.com/');
    //hover to quick tools module
    await page.locator('[class="nav-first-element menuitem"]').hover();
    //click on track a package Link 
    await page.locator('text=Track a Package').click();
    //enter a trackikng number
    await page.locator(' [id="tracking-input"]').fill('111111111111');
    await page.waitForTimeout (5000); //wait for•few seconds• to see it entered-because of fast execution

})//end of test 1

test('Mouse hover to quick tools module and click on schedule a pickup on USPS', async ({ page }) => {
    //navigate to USPS
    await page.goto('https://www.usps.com/');
    //hover to quick tools module
    await page.locator('[class="nav-first-element menuitem"]').hover();
    await page.waitForTimeout(3000); //wait for few seconds
    //click on schedule a pickup link
    await page.locator('[alt="Schedule a Pickup Icon"]').click();
});