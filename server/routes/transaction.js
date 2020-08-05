const router=require('express').Router()
const transactionController = require('../controllers/transactionController') 
const authentication = require('../middleware/authentication') 

router.post('/',authentication,transactionController.order)
// router.get('/getToken',transactionController.getTokenCreditCard)
router.post('/updateStatus', authentication,transactionController.changeStatusPaid)

module.exports=router