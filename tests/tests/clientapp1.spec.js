const{test,expect}=require('@playwright/test');
test.skip('Playwright sample test',async({browser})=>{
    //chrome--Plugins
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.getByPlaceholder('email@example.com').fill('thakkarsuraj641@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('suraj123@');
    await page.getByRole('button',{name:'login'}).click();
    await page.waitForLoadState('networkidle');
    await page.locator('div.card').last().waitFor();
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
    await page.getByText('6a7de01521054ba465d045dd').isVisible();
});
