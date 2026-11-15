const {test,expect}=require('@playwright/test');
//test.describe.configure({mode:'parallel'});
//test.describe.configure({mode:'serial'});
test('Validation test', async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://demoqa.com/automation-practice-form');
    await expect(page.locator('input#firstName')).toBeVisible();
    await page.locator('input#firstName').screenshot({path:'textbox.png'});
    await page.screenshot({path:'fullpage.png'});
});
test('yatra site',async({page})=>{
    await page.goto('https://demoqa.com/automation-practice-form');
    expect(await page.screenshot()).toMatchSnapshot('demoqa.png');
})