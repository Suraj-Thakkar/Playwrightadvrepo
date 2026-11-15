class APIUtils{
    constructor(apiRequest,loginpayLoad){
        this.apiRequest=apiRequest;
        this.loginpayLoad=loginpayLoad;
    }
    async getToken(){
    const loginResponse=await this.apiRequest.post('https://rahulshettyacademy.com/api/ecom/auth/login',{
    data: this.loginpayLoad,
});
//await expect(loginResponse.ok()).toBeTruthy();
const loginResponseJSON=await loginResponse.json();
const token=await loginResponseJSON.token;
console.log(token);
    return token;
    }
    async createOrder(orderPayLoad){
        let response={};
        const token = await this.getToken();
        response.token=token;
        const orderResponse=await this.apiRequest.post('https://rahulshettyacademy.com/api/ecom/order/create-order',{
            data: orderPayLoad,
            headers:{
                'authorization': response.token,
                'content-type':'application/json'
            },
        });
        const orderResponseJson=await orderResponse.json();
        console.log(orderResponseJson);
        const orderId=orderResponseJson.orders[0];
        response.orderId=orderId;
        return response;
    }
}
module.exports={APIUtils};