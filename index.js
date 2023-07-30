const express = require('express');
const path = require('path');
const app = express();

// console.log(path.join(__dirname,"../public"))
const staticpath = path.join(__dirname,"../views");

//built in MiddleWare:
// app.use(express.static(staticpath))

app.set("views",staticpath)
app.set("view engine", "hbs");

app.get("/",(req,res)=>{
    res.render("index", {
        name : "Kishan",
    });
});

// app.get("/", (req,res)=>{
//     res.send("hello from express home page");
// })

// app.get("/about", (req,res)=>{
//     res.send("hello from express about page")
// })

app.listen(3000, ()=>{
    console.log("listening port")
})