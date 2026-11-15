const base=require('@playwright/test');
const {APIUtils}=require('./APIUtils.js');
const {request}=require('@playwright/test');
const loginPayLoad={userEmail: "surajqaprofessional624@gmail.com", userPassword: "Suraj123@"};
const orderPayLoad={orders: [{country: "India", productOrderedId: "6960ea76c941646b7a8b3dd5"}]};
exports.customtest=base.test.extend({
    authenticatedPage: async({browser},use)=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.getByPlaceholder('email@example.com').fill('surajqaprofessional624@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('Suraj123@');
    await page.getByRole('button',{name:'login'}).click();
    await page.waitForLoadState('networkidle');
    await use(page);
    await context.close();
    },
    createOrder: async({},use)=>{
    const apiRequest=await request.newContext();
    const apiUtils=new APIUtils(apiRequest,loginPayLoad);
    const response=await apiUtils.createOrder(orderPayLoad);
    await use(response);
    await apiRequest.dispose();
    },
    testDataForOrder: {
        productName : 'iphone 13 pro'
    }

    });