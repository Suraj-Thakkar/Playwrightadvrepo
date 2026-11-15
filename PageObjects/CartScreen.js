const { expect } = require('@playwright/test');
class CartScreen{
    constructor(page){
        this.page=page;
        this.checkoutButton=page.locator('text=Checkout');
    }
    async checkOut(productName){
        const bool =await this.getProductLocator(productName).isVisible();
        await expect(bool).toBeTruthy();
        await this.checkoutButton.click();
    }
     getProductLocator(productName)
{
    return  this.page.locator("h3:has-text('"+productName+"')");
}
}
module.exports={CartScreen};