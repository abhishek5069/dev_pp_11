const fs= require("fs");
function myfunction(file){
    return new Promise(function(scb,fcb){
        fs.readFile(file,function(err,data){
           if(err){
               fcb();
           }
           else{
               scb(data);
           }
        })
    })
}
let promisedega=myfunction("f1.txt");
promisedega.then(function(data){
    console.log(data+"");
})
promisedega.catch(function(){
    console.log(err);
})