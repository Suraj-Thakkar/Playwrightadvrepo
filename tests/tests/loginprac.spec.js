const{test,expect}=require('@playwright/test');
test('@QS Login practice', async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.route('**/*.css',route=>route.abort());
    await page.route('**/*.{png,jpg,jpeg}', route=>route.abort());
    await page.on('request', request=>console.log(request.url()));
    await page.on('response', response=>console.log(response.url(),response.status()));
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('input#username').fill('rahulshettyacademy');
    await page.locator('input#password').fill('Learning@830$3mK2');
    await page.locator('input#terms').click();
    await page.locator('input#signInBtn').click();
    await page.pause();
});