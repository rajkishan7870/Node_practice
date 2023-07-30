const express = require('express');
const path = require('path');
const app = express();

// console.log(path.join(__dirname,"../public"))
const staticpath = path.join(__dirname,"../public");
//built in MiddleWare:
app.use(express.static(staticpath))

app.get("/", (req,res)=>{
    res.send("hello from express home page");
})

app.get("/about", (req,res)=>{
    res.send("hello from express about page")
})

app.listen(3000, ()=>{
    console.log("listening port")
})