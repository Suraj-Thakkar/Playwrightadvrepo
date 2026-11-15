class DashboardPage{
    constructor(page){
        this.products=page.locator('div.card-body');
        this.productText=page.locator('div.card-body b'); 
        this.cartMain=page.locator("button[routerlink*='cart']");
        this.cartItems=page.locator('div li');
    }
    
    async searchProductAddCart(productName){
    const titles=await this.productText.allTextContents();
    console.log(titles);
    const count=await this.products.count();
    for(let i=0;i<count;i++){``
        if(await this.products.nth(i).locator('b').textContent()=== productName){
            await this.products.nth(i).locator('text= Add To Cart').click();
            break;
        }
    }
    
} 
async goToCart(){
    await this.cartMain.click();
    await this.cartItems.first().waitFor();
}
    
}
module.exports={DashboardPage};