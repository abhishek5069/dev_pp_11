// async => it can be used before a function name !!
// await => it can only be used inside a async function !!

// IIFE => Immediately Invoked Function Expressions !!

const fs = require("fs");

 console.log("start");

async function callMe() {
  try {
    console.log("Hello World !!");
    console.log("I am inside async function !!");
    let f1KaPP = fs.promises.readFile("./f1.txt", "utf8");
    let f2KaPP = fs.promises.readFile("./f2.txt", "utf8");
    let bothFilesData = await Promise.all([f1KaPP, f2KaPP]);
    console.log(bothFilesData);
  } catch (error) {
      console.log(error);
  }
}
callMe();

console.log("end"); 


/* console.log("start");
async function abhi(){
  console.log("in mid");
  let f1daga= await fs.promises.readFile("./f1.txt"); //jse hi async fun aaega  control fir fun ke bahar chala jayega
  console.log(f1daga+"");
  console.log("f1 ke baad");
}
abhi();
console.log("end"); */