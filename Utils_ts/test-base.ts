import { test as basetest } from '@playwright/test';
interface TestDataForPlaceOrder{
    userName:string;
    password:string;
    productName:string;
};
export const customTest = basetest.extend<{ testDataForPlaceOrder: TestDataForPlaceOrder }>({
    testDataForPlaceOrder: {
        userName: 'thakkarsuraj641@gmail.com',
        password: 'Suraj123@',
        productName: 'ZARA COAT 3'
    }
});