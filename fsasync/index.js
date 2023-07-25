const fs = require("fs");
// fs.writeFile("fsasync/read.txt", "welcome to async file", (err)=>{
//     console.log("file created");
//     console.log(err)
// });

// fs.appendFile("fsasync/read.txt", ", WE came.", (err)=>{
//     console.log("appended");
//     console.log(err);
// })

fs.readFile("fsasync/read.txt","utf8", (err,data)=>{
    console.log(data);
    console.log(err);
})
