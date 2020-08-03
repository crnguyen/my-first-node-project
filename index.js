//this grabs the file from myModule
//require is basically saying to import
const myModule = require('./myModule.js');
const fs = require("fs");

fs.readFile("story.txt", "utf8", (err, data) => {
    if (err) {
        console.log("there was a problem reading the file");
    } else {
        console.log(data);
    }
} )
//console.log("hello world");

//console.log(myModule.beBasic());
//myModule.count()

// let i = 1

// const count = () => {
//     console.log(i);
//     i = i*2
// }

// const myTimer = setInterval(count, 1000);

// const today = new Date()
// console.log(today);


const moment = require("moment");

console.log(moment("1/9/1994", "MM DD YYYY").format("dddd [the] Do [of] MMM [in the year] YYYY"));


//dddd [the] Do [of] MMMM [in the year] YYYY
//Wednesday the 11th of September in the year 1985

