import {test,expect,Locator} from '@playwright/test';
import { POManager } from '../PageObjects_ts/POManager';
import { customTest } from '../Utils_ts/test-base.ts';

//json->String-> JS Object
const dataset=JSON.parse(JSON.stringify(require('../Utils_ts/placeorderTestData.json')));
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
customTest(`@Web Playwright modify new sample test`,async({page,testDataForPlaceOrder})=>{
    //chrome--Plugins
    const products=page.locator('div.card-body');
    const poManager=new POManager(page);
    const loginPage=poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForPlaceOrder.userName,testDataForPlaceOrder.password);
    const dashboardPage=poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(testDataForPlaceOrder.productName);
    await dashboardPage.goToCart();
    const cartScreen=poManager.getCartScreen();
    await cartScreen.checkOut(testDataForPlaceOrder.productName);
    const placeOrderScreen=poManager.getPlaceOrderScreen();
    await placeOrderScreen.placeOrder(testDataForPlaceOrder.userName);
    const orderConfirm=poManager.getOrderConfirm();
    const orderId=await orderConfirm.orderConfirmation();
    const orderHistoryScreen=poManager.getOrderHistoryScreen();
    await orderHistoryScreen.OrderHistory(orderId);
});

