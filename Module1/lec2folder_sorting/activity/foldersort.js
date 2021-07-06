const fs = require("fs");
const all_files=require("./util");
let testfolder="./Downloads";
let folderpath;
let files=fs.readdirSync(testfolder);
function getextension(files){
    let extensions=files.split(".");
        return extensions[1];
}

function checkfolder(extension){
    for (key in all_files){
        let exteninkey=all_files[key];
        if(exteninkey.includes(extension))
        {  folderpath=testfolder+"/"+key ;
            break;
        }
    }
    if(!fs.existsSync(folderpath)){
     fs.mkdirSync(folderpath);
    }
    return folderpath;
}
function move(x,folderpath){
    let sourcefile=testfolder+"/"+x;
    let destfiles=folderpath+"/"+x;
    fs.copyFileSync(sourcefile,destfiles);
    fs.unlinkSync(sourcefile);
}
for(let i=0;i<files.length;i++) {
let extension=getextension(files[i]);
let folderpath=checkfolder(extension);
move(files[i],folderpath);

 }
 