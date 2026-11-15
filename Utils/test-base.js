const {test:base}=require('@playwright/test');
exports.customtest=base.extend(
    {
        TestDataForPlaceOrder:
            {
            userName:"thakkarsuraj641@gmail.com",
            password:"Suraj123@",
            productName:"ZARA COAT 3"
        }
    })