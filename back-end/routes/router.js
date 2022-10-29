const express = require('express')
const router = express.Router()
const db = require("../db.js")

router.post("/submit",(req,res,next)=>{
    db.query(
        `insert into meeting values (${db.escape(req.body.meet_id)},${db.escape(req.body.start_date)});`,
    (err,result)=>{
        if(err){
            return res.status(400).send({
                msg:err
            })
        }
            return res.status(200).send({
                msg:"success"
            })
        }
    )
})

module.exports = router;