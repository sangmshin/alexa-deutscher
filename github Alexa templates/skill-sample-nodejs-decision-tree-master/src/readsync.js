


var fs = require("fs");
var contents = fs.readFileSync("dummy.json");
var jsonData = JSON.parse(contents);
console.log("User Name:", jsonData.username);
console.log("Email:", jsonData.email);
console.log("Password:", jsonData.password);