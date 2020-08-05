const { verifyToken } = require('../helpers/jwt')
const secretKey="polalala"

function authentication(req,res,next){
    const {token}=req.headers
    if(!token){
        res.status(400).json({message: "token not found"})
    }
    if(token){
        const decoded=verifyToken(token)
        req.decoded=decoded
        next()
    }else{
        res.status(400).json({message: "JsonWebTokenError"})
    }


}

module.exports=authentication