const router=require('express').Router()
const studentController = require('../controllers/studentController')
const authentication = require('../middleware/authentication')

router.post('/register',studentController.register)
router.post('/login',studentController.login)


module.exports=router