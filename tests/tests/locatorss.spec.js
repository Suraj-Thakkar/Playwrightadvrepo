const{test,expect}=require('@playwright/test');
test('Playwright test', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.goto('https://www.google.com/');
    await page.goBack();
    await expect(page.getByPlaceholder('Hide/Show Example')).toBeVisible();
    await page.locator('input#hide-textbox').click();
    await expect(page.getByPlaceholder('Hide/Show Example')).toBeHidden();
    await page.pause();
    page.on('dialog', dialog=>dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.locator('#mousehover').hover();
    const framespage=page.frameLocator('#courses-iframe');
    const allaccesslabel=await framespage.locator('a[href*="lifetime-access"]:visible').click();
    const label1=framespage.locator('h2 span:visible');
    console.log(label1);

});