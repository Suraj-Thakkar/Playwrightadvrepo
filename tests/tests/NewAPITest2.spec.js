const{test,expect}=require('@playwright/test');
let webContext;
test.beforeAll(async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.getByPlaceholder('email@example.com').fill('surajqaprofessional624@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('Suraj123@');
    await page.getByRole('button',{name:'login'}).click();
    await page.waitForLoadState('networkidle');
    await page.locator('div.card').last().waitFor();
    await context.storageState({path:'state.json'});
    webContext=await browser.newContext({storageState:'state.json'});
});
test('Playwright sample test',async()=>{
    //chrome--Plugins
    const page=await webContext.newPage();
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('div.card-body').filter({hasText:'ADIDAS ORIGINAL'}).getByRole('button',{name:'Add To Cart'}).click();
    await page.getByRole('listitem').filter({hasText:'cart'}).click();
    await page.locator('div li').last().waitFor();
    await expect(page.getByText('ADIDAS ORIGINAL')).toBeVisible();
    await page.getByRole('button',{name:'Checkout'}).click();
    await page.getByPlaceholder('Select Country').click();
    await page.getByPlaceholder('Select Country').pressSequentially('ind');
    await page.getByRole('button',{name:'India'}).nth(1).click();
    await page.getByText('Place Order').click();
    await page.waitForLoadState('networkidle');
    await page.getByText('Thankyou for the order.').waitFor();
    await expect(page.getByText('Thankyou for the order.')).toBeVisible();
    await page.getByRole('button',{name:'ORDERS'}).click();
    await page.waitForLoadState('networkidle');
    await page.locator('tbody tr').first().waitFor();
    await expect(page.getByText('6a9ea6ffe7cd69710fc662e7')).toBeVisible();
});
test('Playwright sample 2', async()=>{
    const page=await webContext.newPage();
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('h5 b').last().waitFor();
    const titles =await page.locator('h5 b').allTextContents();
    console.log(titles);
});
test.afterAll(async()=>{
    await webContext.close();
});