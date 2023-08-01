const express = require("express");

const app = express();
require("./db/conn")
const Student = require("./models/students")

const port = process.env.PORT || 3000;
app.use(express.json());

app.post("/students", (req,res)=>{
    //// console.log(req.body);
    const user = new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((err)=>{
        res.status(404).send(err);
    })
    
})

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})