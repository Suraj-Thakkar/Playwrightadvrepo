const{test,expect}=require('@playwright/test');
test('@Web Playwright automation test',async({browser})=>
{
    //chrome--Plugins
    test.setTimeout(60_000);
    const context=await browser.newContext();
    const slowExpect=expect.configure({timeout:10_000});
    const page=await context.newPage();
    page.setDefaultTimeout(9_000);
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Employed').check();
    await page.getByLabel('Gender').selectOption('Female');
    await page.getByPlaceholder('Password').fill('abc123@');
    await page.getByRole('button',{name:'Submit'}).click();
    await page.getByText('Success! The Form has been submitted successfully!.').isVisible();
    //5 seconds default for expect assertions and to override use timeout option in expect assertion as shown below 
    //await expect(page.getByText('Success! The Form has been submitted successfully!.')).toBeVisible({timeout:10_000}); 
    await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
    await page.getByRole('link',{name:'Shop'}).click();
    await slowExpect(page.locator('div h1')).toContainText('Shop');
    await page.locator('app-card.col-lg-3').filter({hasText:'Blackberry'}).getByRole('button',{name:'Add'}).click();
    
});