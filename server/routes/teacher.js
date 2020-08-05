const router=require('express').Router()
const teacherController = require('../controllers/teacherController')
const authentication = require('../middleware/authentication')

router.post('/register',teacherController.register)
router.post('/login',teacherController.login)
router.use(authentication)
router.get('/', teacherController.getAll)


module.exports=router