const fs=require("fs");
console.log("start");

//hof(async fun)
fs.readFile("./f1.txt",getdata);  
function getdata(error,data){
    console.log(data+"");
}

console.log("end");

