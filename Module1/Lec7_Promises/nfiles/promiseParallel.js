let files=["../f1.txt","../f2.txt","../f3.txt"];
let fs=require("fs");
for(let i=0;i<files.length;i++){
   let fileprom= fs.promises.readFile(files[i]);
   fileprom.then(function(data){
       console.log(data+"");
   });
}