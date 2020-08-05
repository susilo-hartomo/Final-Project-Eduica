const router=require('express').Router()
const studentRoute = require('./student')
const teacherRoute = require('./teacher')
const transactionRoute = require('./transaction')

router.use('/student',studentRoute)
router.use('/teacher',teacherRoute)
router.use('/transaction',transactionRoute)

module.exports = router