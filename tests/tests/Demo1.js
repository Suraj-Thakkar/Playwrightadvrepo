const { expect } = require('@playwright/test');
let message1 = "Hello";
message1 = "World";
console.log(message1);
let num1 = 6;
console.log(num1);
let arr1 = [4, 5, 6];
console.log(arr1);
let val = "This can be any type";
let isActive1 = true;
val = 91;
console.log(val);
console.log(isActive1);
function add(a, b) {
    return a + b;
}
let res2 = add(5, 6);
console.log(res2);
let user1 = { name: "Suraj", age: 29, location: "Hyderabad" };
user1.location = "Jaipur";
class CartScreen {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator('text=Checkout');
    }
    async checkOut(productName) {
        const bool = await this.getProductLocator(productName).isVisible();
        await expect(bool).toBeTruthy();
        await this.checkoutButton.click();
    }
    getProductLocator(productName) {
        return this.page.locator("h3:has-text('" + productName + "')");
    }
}
module.exports = { CartScreen };
export {};
