import {expect,Page,Locator} from '@playwright/test';
export class PlaceOrderScreen{
  userNameLabel:Locator;
  plcordScreen:Locator;
  countryInput:Locator;
  dropdown:Locator;
  plcordBtn:Locator;
  constructor(page:Page){
    this.userNameLabel=page.locator('.user__name label');
    this.plcordScreen=page.locator('input.input');
    this.countryInput=page.locator("input[placeholder*='Country']");
    this.dropdown=page.locator('.ta-results');
    this.plcordBtn=page.locator('.action__submit');
    
  }
  async placeOrder(userName:string){
    await this.plcordScreen.last().waitFor();
    await this.countryInput.pressSequentially('ind');
    await this.dropdown.waitFor();
    const optionsCount=await this.dropdown.locator('button').count();
    for(let i=0;i<optionsCount;i++){
            let text:any;
            text=await this.dropdown.locator('button').nth(i).textContent();
            if(text.trim()==='India'){
                await this.dropdown.locator('button').nth(i).click();
                break;
            }
        }
        await expect(this.userNameLabel.first()).toHaveText(userName);
        await this.plcordBtn.click();

  }
}

