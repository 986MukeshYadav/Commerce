async function userDetailsController(req,res) {
    try{
        console.log("userid",req.userId);
        
    }catch(err){
        res.json(400).json({
            message:err.message || err,
            error:true,
            success:false,
        })
    }
}

module.exports = userDetailsController;