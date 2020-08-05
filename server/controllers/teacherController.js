const { Teacher } =require ('../models')
const bcrypt = require('bcrypt')
const {generateToken,verifyToken} = require('../helpers/jwt')

class TeacherController {
    static register(req,res, next){
        const { name,email,password,role,kompetensi } = req.body
        Teacher.create({
            name,
            email,
            password,
            role,
            kompetensi
        })
        .then(teacher=>{
            res.status(201).json(teacher)
        })
        .catch(err=>{
            next(err);
        })
    }

    static login(req,res) {
        const {email,password} = req.body
        Teacher.findOne({
            where:{
                email
            }
        })
        .then(teacher=>{
            if(!teacher){
                res.status(400).json({message: "Invalid email or password" })
            }
            const payload = { 
                id: teacher.id,
                email: teacher.email
            }
            if(bcrypt.compareSync(password,teacher.password)){
                const token = generateToken(payload);
                res.status(200).json({token})
            }else{
                res.status(400).json({message: "Invalid email or password" })

            }
        })
    }

    static getAll(req, res, next) {
        Teacher.findAll()
        .then(teachers => {
            let dataTeachers = []
            teachers.forEach(teacher => {
                const { id, name, email, role, kompetensi }= teacher
                dataTeachers.push({
                    id,
                    name,
                    email,
                    role,
                    kompetensi
                })
            });
            res.status(200).json(dataTeachers)
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = TeacherController