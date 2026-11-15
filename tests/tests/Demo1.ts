const { expect } = require('@playwright/test');
import { type Locator, type Page } from '@playwright/test';
let message1: string="Hello";
message1="World";
console.log(message1);
let num1: number=6;
console.log(num1)
let arr1: number[]=[4,5,6];
console.log(arr1);
let val: any="This can be any type";
let isActive1: boolean=true;
val=91;
console.log(val);
console.log(isActive1);
function add(a:number,b:number):number{
    return a+b;
} 
let res2:number=add(5,6);
console.log(res2);
let user1:{name:string,age:number,location:string}={name:"Suraj",age:29,location:"Hyderabad"};
user1.location="Jaipur";

class CartScreen{
    constructor(page:Page){
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
