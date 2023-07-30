const express = require('express');
const path = require('path');
const app = express();
const hbs = require("hbs")

// console.log(path.join(__dirname,"../public"))
const templatepath = path.join(__dirname,"../template/views");
const partialsPath = path.join(__dirname,"../template/partials");
hbs.registerPartials(partialsPath);


//built in MiddleWare:
// app.use(express.static(staticpath))

app.set("views",templatepath)
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