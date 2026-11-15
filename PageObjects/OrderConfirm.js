const { expect } = require('@playwright/test');
class OrderConfirm{
    constructor(page){
        this.OrderConfirmMessage=page.locator('.hero-primary');
        this.OrderIdText=page.locator('.em-spacer-1 .ng-star-inserted');
    }
    async orderConfirmation(){
        await expect(this.OrderConfirmMessage).toHaveText(' Thankyou for the order. ');
        const orderId=await this.OrderIdText.textContent();
        console.log(orderId);
        return orderId;
    }
}
module.exports={OrderConfirm};