const { expect } = require('@playwright/test');
class PlaceOrderScreen{
  constructor(page){
    this.userNameLabel=page.locator('.user__name label');
    this.plcordScreen=page.locator('input.input');
    this.countryInput=page.locator("input[placeholder*='Country']");
    this.dropdown=page.locator('.ta-results');
    this.plcordBtn=page.locator('.action__submit');
    
  }
  async placeOrder(userName){
    await this.plcordScreen.last().waitFor();
    await this.countryInput.pressSequentially('ind');
    await this.dropdown.waitFor();
    const optionsCount=await this.dropdown.locator('button').count();
    for(let i=0;i<optionsCount;i++){
            let text=await this.dropdown.locator('button').nth(i).textContent();
            if(text.trim()==='India'){
                await this.dropdown.locator('button').nth(i).click();
                break;
            }
        }
        await expect(this.userNameLabel.first()).toHaveText(userName);
        await this.plcordBtn.click();

  }
}
module.exports={PlaceOrderScreen};
