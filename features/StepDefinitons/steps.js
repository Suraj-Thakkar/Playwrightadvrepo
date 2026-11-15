const { When, Then, Given } = require('@cucumber/cucumber');
const {POManager}=require('../../PageObjects/POManager');
const {expect}=require('@playwright/test');
const {playwright}=require('@playwright/test');
const { chromium } = require('@playwright/test');
Given('login to ecommerce application with {string} and {string}',{timeout: 100*1000}, async function (username, password) {
           // Write code here that turns the phrase above into concrete actions
            const loginPage=this.poManager.getLoginPage();
            await loginPage.goTo();
            await loginPage.validLogin(username,password);
         });
 When('Add {string} to cart',{timeout: 100*1000}, async function (productName) {
           // Write code here that turns the phrase above into concrete actions
           const dashboardPage=this.poManager.getDashboardPage();
           await dashboardPage.searchProductAddCart(productName);
           await dashboardPage.goToCart();
         });
Then('Verify {string} is displayed in the cart',{timeout: 100*1000}, async function (productName) {
           // Write code here that turns the phrase above into concrete actions
           const cartScreen=this.poManager.getCartScreen();
           await cartScreen.checkOut(productName);
         });
When('Enter valid details and place the order and check {string} is displayed',{timeout: 100*1000}, async function (username) {
           // Write code here that turns the phrase above into concrete actions
           const placeOrderScreen=this.poManager.getPlaceOrderScreen();
           await placeOrderScreen.placeOrder(username);
           const orderConfirm=this.poManager.getOrderConfirm();
           this.orderId=await orderConfirm.orderConfirmation();
         });
Then('Verify order is displayed in orderHistory',{timeout: 100*1000}, async function () {
           // Write code here that turns the phrase above into concrete actions
           const orderHistoryScreen=this.poManager.getOrderHistoryScreen();
           await orderHistoryScreen.OrderHistory(this.orderId);
         });
 Given('Login to the application with {string} and {string}',async function (username, password) {
           const userName=this.page.locator('#username');
           const signIn=this.page.locator('#signInBtn');
           await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
           console.log(await this.page.title());
           await userName.type(username);
           await this.page.locator("[type='password']").type(password);
           await signIn.click();
         });

Then('Verify error message is displayed for invalid credentials', async function () {
           console.log(await this.page.locator("[style*='block']").textContent());
           await expect(this.page.locator("[style*='block']")).toContainText("Incorrect");
         });