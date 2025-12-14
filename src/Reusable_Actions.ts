import { Page } from "@playwright/test";

//methos to click on unique element
export async function click(page:Page, locator:string, elementName:string) {
    console.log("Clicking on " + elementName);
    await page.locator(locator).click();
}//end of click method

//method to click on element by index
export async function clickByIndex(page: Page, locator: string, index: number, elementName: string) {
    console.log("Clicking on " + elementName);
    await page.locator(locator).nth(index).click();
}//end of click by index method

//method to type on unique element
export async function type(page: Page, locator: string, userValue: string, elementName: string) {
    console.log("Typing on " + elementName);
    let element = page.locator(locator);
    await element.fill(''); //clear any pre-existing text
    await element.fill(userValue);
}//end of type method

//method to type on element by index
export async function typeByIndex(page: Page, locator: string, index: number, userValue: string, elementName: string) {
    console.log("Typing on " + elementName);
    let element = page.locator(locator).nth(index);
    await element.fill(''); //clear any pre-existing text
    await element.fill(userValue);
}//end of type by index method

//method to capture text on unique element
export async function getText(page: Page, locator: string, elementName: string) {
    console.log("Capturing text from " + elementName);
    let result = await page.locator(locator).innerText();
    return result;
}//end of get text method

//method to capture text on element by index
export async function getTextByIndex(page: Page, locator: string, index: number, elementName: string) {
    console.log("Capturing text from " + elementName);
    let result = await page.locator(locator).nth(index).innerText();
    return result;
}//end of get text by index method


//method to hover on unique element
export async function mousehover(page: Page, locator: string, elementName: string) {
    console.log("Hovering on " + elementName);
    await page.locator(locator).hover();
}//end of hover method

//method to hover on element by index
export async function hoverByIndex(page: Page, locator: string, index: number, elementName: string) {
    console.log("Hovering on " + elementName);
    await page.locator(locator).nth(index).hover();
}//end of hover by index method

//method to scroll by element
export async function scrollToElement(page: Page, locator: string, elementName: string) {
    console.log("Scrolling to " + elementName);
    await page.locator(locator).scrollIntoViewIfNeeded();
}//end of scroll to element method

//method to select drop down by visible text on unique element
export async function selectDropDown(page: Page, locator: string, visibleText: string, elementName: string) {
    console.log("Selecting " + visibleText + " from " + elementName);
    await page.locator(locator).selectOption({ label: visibleText });
}//end of select drop down method

//method to scroll by pixels using mousewheel
export async function scrollByPixels(page: Page, deltaX: number, deltaY: number) {
    console.log("Scrolling " + " by mouse wheel: (" + deltaX + ", " + deltaY + ")");
    await page.mouse.wheel(deltaX, deltaY);
}//end of scroll by mousewheel method

export async function tabByClick(page: Page, locator: string, elementName: string) {
    console.log("Clicking on " + elementName + " and waiting for new tab");
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        page.locator(locator).click()
    ]);
    await newPage.waitForLoadState();
    return newPage;
}//end of tabByClick

//method to switch to tabs
/*export async function switchToTab(page: Page, index: number) {
    console.log("Switching to tab index ");
    const pages = page.context().pages();
    if (index < pages.length) {
        const tab = pages[index];
        await tab.bringToFront();
        return tab;

    } else {
        console.log("Tab index out of range");
        return null;
    }
    
}//end of switch to tabs method */

