const{test,expect}=require('@playwright/test');
test('@QA Security Testing', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.getByPlaceholder('email@example.com').fill('surajqaprofessional624@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('Suraj123@');
    await page.getByRole('button',{name:'login'}).click();
    await page.waitForLoadState('networkidle');
    await page.locator('div.card').last().waitFor();
    await page.locator('button[routerlink*="myorders"]').click();
    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*',route=>route.continue({url:'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=0a9ffb9be7cd69710fc2323232312'}));
    await page.locator('tr.ng-star-inserted').first().waitFor();
    await page.waitForLoadState('networkidle');
    const Row1=await page.locator('tr.ng-star-inserted').first();
    await Row1.locator('button:has-text("View")').click();
    await page.pause();
    await expect(page.locator('p.blink_me')).toHaveText('You are not authorize to view this order');
});