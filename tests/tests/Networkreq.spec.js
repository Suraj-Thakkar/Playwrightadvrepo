const {test,expect,request} = require('@playwright/test');
const {APIUtils}=require('../../Utils/APIUtils.js');
const loginPayLoad={userEmail: "surajqaprofessional624@gmail.com", userPassword: "Suraj123@"};
const orderPayLoad={orders: [{country: "India", productOrderedId: "6960ea76c941646b7a8b3dd5"}]};
const fakePayLoad={"data":[],"message":"No Orders"};
let response;
test.beforeAll(async()=>{
    const apiContext=await request.newContext();
    const apiUtils=new APIUtils(apiContext,loginPayLoad);
    response=await apiUtils.createOrder(orderPayLoad);
});
test('@API Place the order',async({page})=>{
    await page.addInitScript(value=>{
        window.localStorage.setItem('token',value);
    },response.token);
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*',async route=>{
        let response1=await page.request.fetch(route.request());
        let body=JSON.stringify(fakePayLoad);
        await route.fulfill(
            {
                response: response1,
                status: 200, 
                contentType: 'application/json',
                body
            });
        
    });
    await page.locator('button[routerlink="/dashboard/myorders"]').click();
    await page.waitForResponse('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*');
    await expect(page.locator('div.mt-4')).toHaveText(' You have No Orders to show at this time. Please Visit Back Us ');
    //Response modification is done by fulfil. Request modification is done by continue.
});