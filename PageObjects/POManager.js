const {LoginPage}=require('../PageObjects/LoginPage');
const {DashboardPage}=require('../PageObjects/DashboardPage');
const {CartScreen}=require('../PageObjects/CartScreen');
const {PlaceOrderScreen}=require('../PageObjects/PlaceOrderScreen');
const {OrderConfirm}=require('../PageObjects/OrderConfirm');
const {OrderHistoryScreen}=require('../PageObjects/OrderHistoryScreen');
class POManager{
    constructor(page){
        this.page=page;
        this.loginPage=new LoginPage(this.page);
        this.dashboardPage=new DashboardPage(this.page);
        this.cartScreen=new CartScreen(this.page);
        this.placeOrderScreen=new PlaceOrderScreen(this.page);
        this.orderConfirm=new OrderConfirm(this.page);
        this.orderHistoryScreen=new OrderHistoryScreen(this.page);
    }
    getLoginPage(){
        return this.loginPage;
    }
    getDashboardPage(){
        return this.dashboardPage;
    }
    getCartScreen(){
        return this.cartScreen;
    }
    getPlaceOrderScreen(){
        return this.placeOrderScreen;
    }
    getOrderConfirm(){
        return this.orderConfirm;
    }
    getOrderHistoryScreen(){
        return this.orderHistoryScreen;
    }

}
module.exports={POManager};
