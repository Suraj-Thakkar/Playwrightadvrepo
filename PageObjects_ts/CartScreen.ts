import {Page,expect,Locator} from '@playwright/test';
export class CartScreen{
    page:Page;
    checkoutButton:Locator;
    constructor(page:Page){
        this.page=page;
        this.checkoutButton=page.locator('text=Checkout');
    }
    async checkOut(productName:string){
        const bool =await this.getProductLocator(productName).isVisible();
        await expect(bool).toBeTruthy();
        await this.checkoutButton.click();
    }
     getProductLocator(productName:string)
{
    return  this.page.locator("h3:has-text('"+productName+"')");
}
}
