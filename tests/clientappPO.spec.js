const{test,expect}=require('@playwright/test');
const {customtest}=require('../Utils/test-base.js');
const{POManager}=require('../PageObjects/POManager');
//json->String-> JS Object
const dataset=JSON.parse(JSON.stringify(require('../Utils/placeorderTestData.json')));
for(const data of dataset){
test(`Playwright sample test ${data.productName}`,async({browser})=>{
    //chrome--Plugins
    const context=await browser.newContext();
    const page=await context.newPage();
    const products=page.locator('div.card-body');
    const poManager=new POManager(page);
    const loginPage=poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.userName,data.password);
    const dashboardPage=poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.goToCart();
    const cartScreen=poManager.getCartScreen();
    await cartScreen.checkOut(data.productName);
    const placeOrderScreen=poManager.getPlaceOrderScreen();
    await placeOrderScreen.placeOrder(data.userName);
    const orderConfirm=poManager.getOrderConfirm();
    const orderId=await orderConfirm.orderConfirmation();
    const orderHistoryScreen=poManager.getOrderHistoryScreen();
    await orderHistoryScreen.OrderHistory(orderId);
});
}
customtest(`@Web Playwright modify new sample test`,async({page,TestDataForPlaceOrder})=>{
    //chrome--Plugins
    const products=page.locator('div.card-body');
    const poManager=new POManager(page);
    const loginPage=poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(TestDataForPlaceOrder.userName,TestDataForPlaceOrder.password);
    const dashboardPage=poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(TestDataForPlaceOrder.productName);
    await dashboardPage.goToCart();
    const cartScreen=poManager.getCartScreen();
    await cartScreen.checkOut(TestDataForPlaceOrder.productName);
    const placeOrderScreen=poManager.getPlaceOrderScreen();
    await placeOrderScreen.placeOrder(TestDataForPlaceOrder.userName);
    const orderConfirm=poManager.getOrderConfirm();
    const orderId=await orderConfirm.orderConfirmation();
    const orderHistoryScreen=poManager.getOrderHistoryScreen();
    await orderHistoryScreen.OrderHistory(orderId);
});

