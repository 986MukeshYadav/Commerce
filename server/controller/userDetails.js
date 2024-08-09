const userModel = require("../models/userModel");

async function userDetailsController(req,res) {
    try{
        console.log("userId",req.userId);

        const user = await userModel.findById(req.userId)

        res.status(200).json({
            data:user,
            success : true,
            error : false,
            message : "User details fetched successfully"
        })
        
        console.log("user",user)

    }catch(err){
        res.json(400).json({
            message:err.message || err,
            error:true,
            success:false,
        })
    }
}

module.exports = userDetailsController;