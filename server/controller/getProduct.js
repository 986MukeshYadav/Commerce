const productModel = require("../models/productModel")

const getProductController =async (req,res)=>{
    try{
        const allProduct = await productModel.find().sort({createdAt : -1})
        res.json({
            data : allProduct,
            success : true,
            error : false,
            message : "All Products fetched successfully"
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = getProductController;