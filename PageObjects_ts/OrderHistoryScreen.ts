import {expect,Page,Locator} from '@playwright/test';
export class OrderHistoryScreen{
    orders:Locator;
    rows:Locator;
    constructor(page:Page){
        this.orders=page.locator("button[routerlink*='myorders']");
        this.rows=page.locator('tbody tr');
    }
    async OrderHistory(orderId:any){
        await this.orders.click();
        await this.rows.last().waitFor();
        const rowsCount=await this.rows.count();
        let found=false;
        const cleanOrderId = orderId.replace(/\|/g, '').trim();
        for(let i=0;i<rowsCount;i++){
            let rowsOrderId:any;
            rowsOrderId=(await this.rows.nth(i).locator('th').textContent())!.trim();
            if(rowsOrderId === cleanOrderId){
                console.log("Order is placed",rowsOrderId);
                found=true;
                break;
                }
            }
            await expect(found).toBeTruthy();
    }         
}
