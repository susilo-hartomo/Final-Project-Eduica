module.exports = function(err, req, res, next){
  let statusCode = 500
  let message = "Internal Server Error!"
  switch(err.name){
    case "SequelizeValidationError":
      statusCode = 400
      message = err.errors[0].message
      break;
    // case 'BadRequestError': 
    //   statusCode = err.statusCode
    //   message = err.message
    //   break;
      default : statusCode === 500 && console.log(err.stack)
    }
  res.status(statusCode).json({message})
  
}