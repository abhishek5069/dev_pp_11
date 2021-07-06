 const fs=require("fs");
 let f1read=fs.readFileSync("./f1.txt","utf-8");
 console.log(f1read );
 fs.writeFileSync("write.txt","writing folder");
