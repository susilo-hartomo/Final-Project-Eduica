const {Student } = require('../models/index')
const bcrypt = require('bcrypt')
const {generateToken,verifyToken} = require('../helpers/jwt')

class StudentController {
    static register(req,res, next){
        const { name,email,password,role,jenjangsekolah,telp,address } = req.body
        Student.create({
            name,
            email,
            password,
            role,
            jenjangsekolah,
            telp,
            address
        })
        .then(student=>{
            res.status(201).json(student)
        })
        .catch(err=>{
            next(err);
        })
    }

    static login(req,res){
        const {email,password} = req.body
        Student.findOne({
            where:{
                email
            }
        })
        .then(student=>{
            if(!student){
                res.status(400).json({message: "Invalid email or password" })
            }
            const payload = { 
                id: student.id,
                email: student.email
            }
            if(bcrypt.compareSync(password,student.password)){
                const token = generateToken(payload);
                res.status(200).json({token})
            }else{
                res.status(400).json({message: "Invalid email or password" })

            }
        })
    }
}

module.exports = StudentController