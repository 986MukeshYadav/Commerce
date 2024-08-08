const jwt = require('jsonwebtoken')


async function authToken(req,res,next){
        try{
            const token = req.cookies?.token 
            console.log("token",token);
            
            if(!token){
                return res.status(200).json({
                    message:"User not Logged in",
                    error:true,
                    success:false,
                })
            }

            jwt.verify(token,process.env.TOKEN_SECRET_KEY,function(err,decoded){
                console.log(err);
                console.log("decoded",decoded)
            
                if(err){
                    console.log('Error auth',err);
                    
                }
                req.userId = decoded?._id 
                
                next()
                
            })

        }catch(err){
            res.json(400).json({
                message:err.message || err,
                data:[],
                error:true,
                success:false,
            })
        }
    }
    module.exports = authToken;
