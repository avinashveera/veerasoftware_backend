const express = require('express')
const usercomment = require('../db')
const app = express()
const router=express.Router();
require('../db')





   router.post('/comment', (req,res)=>{

      console.log(req.body)

        const feedback=new usercomment({name:req.body.name,comment:req.body.comment})
         feedback.save().then(()=>{console.log("thanku")})
         res.send('ok')
     
     })


     router.get('/comments',async (req,res)=>{

        const data=await usercomment.find({})


        res.send(JSON.stringify(data))

     })


     module.exports=router;

