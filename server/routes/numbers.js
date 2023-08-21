const express = require("express");
const router = express.Router();
const ct = require("../controller/numbers");


router.post("/numbers",async (req,res,next)=>{
    try{
        const numbers =await ct.fetchNumbersSorted(req.body.data);
        console.log(numbers);
        res.json(numbers);
    }
    catch(err){
        res.status(500);
        console.log(err);
    }
});

module.exports=router;