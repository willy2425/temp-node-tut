/*

const amount = 12

if (amount< 10){
    console.log('small number');
}else {
    console.log('large number');
}

console.log(`hey its my first node app!!!`);

*/


// Globals - No windows !!!

// _dirname  - path to current directory 
// _filename - filename
// require - function to use modules (COmmonJS)
// process - info about env where the program is beeing executed


/*
console.log(__dirname)
setInterval(() => {
    console.log('hello world')
},1000)


// modules--> Node normally uses commonJS and everyfile in node is an module



const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)



*/


/*

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello, ");
    res.write("world!"); // Combine all `res.write()` calls
    res.end(); // End response here
  } else {
    res.write("404 Not Found");
    res.end(); // Ensure every response ends properly
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});


*/


const _ = require('lodash');

const items = [1, [2, [3 , [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
