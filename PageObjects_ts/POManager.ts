import {LoginPage} from '../PageObjects/LoginPage';
//const {LoginPage}=require('../PageObjects/LoginPage');
import {DashboardPage} from '../PageObjects/DashboardPage';
import {CartScreen} from '../PageObjects/CartScreen';
import {PlaceOrderScreen} from '../PageObjects/PlaceOrderScreen';
import {OrderConfirm} from '../PageObjects/OrderConfirm';
import {OrderHistoryScreen} from '../PageObjects/OrderHistoryScreen';
import { type Page } from '@playwright/test';
export class POManager{
    page:Page;
    loginPage:LoginPage;
    dashboardPage:DashboardPage;
    cartScreen:CartScreen;
    placeOrderScreen:PlaceOrderScreen;
    orderConfirm:OrderConfirm;
    orderHistoryScreen:OrderHistoryScreen;

    constructor(page:Page){
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

