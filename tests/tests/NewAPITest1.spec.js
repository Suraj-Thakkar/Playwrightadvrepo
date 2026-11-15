const{test,expect,request}=require('@playwright/test');
const {APIUtils}=require('../../Utils/APIUtils.js');
const loginpayLoad={userEmail: "thakkarsuraj641@gmail.com", userPassword: "Suraj123@"};
const orderPayLoad={orders: [{country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3"}]}
let response;
test.beforeAll(async()=>{
    const apiRequest=await request.newContext();
    const apiUtils=new APIUtils(apiRequest,loginpayLoad);
    response=await apiUtils.createOrder(orderPayLoad);
 
});
test('Sampled Test',async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.addInitScript(value=>{
        window.localStorage.setItem('token',value);
    }, response.token);
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.getByRole('button',{name:'ORDERS'}).click();
    await page.waitForLoadState('networkidle');
    await page.locator('tbody tr').first().waitFor();
    const rows=page.locator('tbody tr');
    const rowCount=await rows.count();  
    for(let i=0;i<rowCount;i++){
        const rowOrderId=await rows.nth(i).locator('th').textContent();
        if(response.orderId.includes(rowOrderId.trim())){
            console.log('Row Order Id',rowOrderId,'Looking for ',response.orderId);
            await rows.nth(i).locator('td button').first().click();
            break;
        }
    }
    await page.waitForLoadState('networkidle');
    await page.locator('p.tagline').waitFor(); 
    const orderIdNo=await page.locator('div.col-text').textContent();
    await page.pause();
    await expect(response.orderId.includes(orderIdNo)).toBeTruthy();
});