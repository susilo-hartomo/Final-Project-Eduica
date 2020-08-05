const {Transaction} = require('../models')
const midtransClient = require('midtrans-client');
// Create Core API instance
let coreApi = new midtransClient.CoreApi({
        isProduction : false,
        serverKey : 'SB-Mid-server-mRQpxcyYVgLj724iuQK1JZ9E',
        clientKey : 'SB-Mid-client-f6iSgP7rL6FhREfT'
    });

class TransactionController {

    static order(req,res, next){
        const { price,paid,time,date,TeacherId} = req.body
        
        Transaction.create({
            StudentId:req.decoded.id,
            TeacherId,
            time,
            price:price,
            date,
        })
        .then((transaction)=>{
            res.status(201).json(transaction)
        })
        .catch(err=>{
            next(err)
        })
    }

    // static getTokenCreditCard (req,res) { 
    //     let card = {
    //         'card_number': '5264 2210 3887 4659',
    //         'card_exp_month': '12',
    //         'card_exp_year': '2020',
    //         'card_cvv': '123',
    //         'client_key': 'SB-Mid-client-f6iSgP7rL6FhREfT'
    //     }
    //     coreApi.cardToken(card)
    //     .then((cardTokenResponse)=>{
    //         // console.log(cardTokenResponse)
    //         let cardToken = cardTokenResponse.token_id;
    //         let parameter = {
    //             "payment_type": "credit_card",
    //             "transaction_details": {
    //                 "gross_amount": 12145,
    //                 "order_id": "41",
    //             },
    //             "credit_card":{
    //                 "token_id": cardToken,
    //                 "authentication":true,
    //                 "save_token_id":true
    //             }
    //         };
    //         return coreApi.charge(parameter);
    //     })
    //     .then((chargeResponse)=>{
    //         // console.log('chargeResponse:',JSON.stringify(chargeResponse));
    //         res.status(200).json({chargeResponse})
    //     })
    //     .catch((e)=>{
    //         console.log('Error occured:',e.message);
    //     });
    // }

    static changeStatusPaid(req,res, next){
        const { transaction_status } = req.body
        if(transaction_status === "capture"){
            Transaction.update({
                paid:true
            },{
                where:{
                    id:req.body.id
                }
            })
            .then(trans=>{
                res.status(200).json({message:"success payment"})
            })
            .catch(err=>{
                next(err)
            })
        }
    }
}

module.exports=TransactionController