import { Bills } from "apps/billservice/src/schemas/bill.schema"

export const billStub=():Bills =>{
    let today: Date = new Date();
    return{
        orderId:"xyz",
        billnumber:"",
        orderNumber:"",
        BillDate:today,
        OrderPrice:0,
        Taxes:0,
        TotalBillPrice:0,
        PrintedOn:today,
        Remark:"remark",
        createdBy:"xyz",
        createdOn:today,
        tagNum:[],
        buyer:"xyz",
        buyerName:"xyz",
        sellerName:"xyz",
        mobileNumber:234,
        isRetailsale:true,
        address:"xyz",
        updatedBy:"xyz",
        updatedOn:today,
    }
}