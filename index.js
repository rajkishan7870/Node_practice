const fs = require("fs");

fs.writeFileSync("read.txt", "Welcome kishan kumar");
fs.appendFileSync("read.txt",", how are you?");

const buf_data = fs.readFileSync("read.txt");

const org_data = buf_data.toString();

console.log(org_data);