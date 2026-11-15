const {test,expect,request}=require('@playwright/test');
const {customtest}=require('../../Utils/fixtures.js');
customtest('@Web Sample Test',async({authenticatedPage, createOrder, testDataForOrder})=>{
await authenticatedPage.goto("https://rahulshettyacademy.com/client/");
await authenticatedPage.locator('button[routerlink="/dashboard/myorders"]').click();
await authenticatedPage.locator('tbody').waitFor();
await expect(authenticatedPage.getByText(createOrder.orderId)).toBeVisible();
console.log(testDataForOrder.productName);
});