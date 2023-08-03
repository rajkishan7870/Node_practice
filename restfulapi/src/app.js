const express = require("express");

const app = express();
require("./db/conn")
const Student = require("./models/students")

const port = process.env.PORT || 3000;
app.use(express.json());

app.post("/students", async (req,res)=>{
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
app.get("/students", async(req,res)=>{
    try{
        const studentData = await Student.find();
        res.send(studentData);
    }catch(err){
        res.send(err)
    }
})

//get indivisual data by using id .......

app.get("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const studentData = await Student.findById({_id : _id});
        res.send(studentData);
    }catch(err){
        res.send(err);
    }
})

app.patch("/students/:id", async(req,res)=>{
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

app.delete("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const studentData = await Student.findByIdAndDelete(_id);
        res.send(studentData);
    }catch(err){
        res.send(err);
    }
})

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})