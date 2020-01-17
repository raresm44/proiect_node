const jwt = require("jsonwebtoken");
const config = require("../config.js");

const messages ={
    unauthorized: 'acces unauthorized'
}

module.exports = function(req,res,next){
    
    if(!req.headers.authorization){
        res.status(401).send({
            error: messages.unauthorized,            
        });
    }else{
    const tokenToVerify = req.headers.authorization.replace('Bearer ','');
    jwt.verify(tokenToVerify, config.JWTSECRET, (err,data) =>{
        if(err){
            res.status(401).send({
                error: messages.unauthorized,
            });
        }else{
            next();
        }
    })
        
    }
}