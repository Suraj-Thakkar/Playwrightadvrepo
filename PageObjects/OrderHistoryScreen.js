const {expect}=require('@playwright/test');
class OrderHistoryScreen{
    constructor(page){
        this.orders=page.locator("button[routerlink*='myorders']");
        this.rows=page.locator('tbody tr');
    }
    async OrderHistory(orderId){
        await this.orders.click();
        await this.rows.last().waitFor();
        const rowsCount=await this.rows.count();
        let found=false;
        const cleanOrderId = orderId.replace(/\|/g, '').trim();
        for(let i=0;i<rowsCount;i++){
        const rowsOrderId=(await this.rows.nth(i).locator('th').textContent()).trim();
            if(rowsOrderId === cleanOrderId){
                console.log("Order is placed",rowsOrderId);
                found=true;
                break;
                }
            }
            await expect(found).toBeTruthy();
    }         
}
module.exports={OrderHistoryScreen};