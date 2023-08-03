const express = require("express");

const router = new express.Router();

const Student = require("../models/students")

router.get("/thapa",(req,res)=>{
    res.send("hello guys")
});

router.post("/students", async (req,res)=>{
    //// console.log(req.body);
    try{
        const user =  new Student(req.body);
        const studentData = await user.save();
        res.status(201).send(studentData)
    }catch(err){
        res.status(404).send("getting error")
    }   
})
//get data from mongo.....
router.get("/students", async(req,res)=>{
    try{
        const studentData = await Student.find();
        res.send(studentData);
    }catch(err){
        res.send(err)
    }
})

//get indivisual data by using id .......

router.get("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const studentData = await Student.findById({_id : _id});
        res.send(studentData);
    }catch(err){
        res.send(err);
    }
})

router.patch("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const studentData = await Student.findByIdAndUpdate({_id : _id},req.body, {
            new : true
        });
        res.send(studentData);
    }catch(err){
        res.send(err);
    }
})

router.delete("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const studentData = await Student.findByIdAndDelete(_id);
        res.send(studentData);
    }catch(err){
        res.send(err);
    }
})

module.exports = router;

