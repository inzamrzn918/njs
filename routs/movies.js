const express = require("express")
const router = express.Router()


router.get('/',(req, res)=>{
    res.send("Hello")
})

router.get('/:id',(req, res)=>{
    res.send(req.params.id)
})

router.post('/',(req,res)=>{
    res.send(req.body)
})


router.get('/search/:query',(req,res)=>{
       res.send(req.params.query)
})


 module.exports = router

