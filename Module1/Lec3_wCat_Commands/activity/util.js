let fs=require("fs");
function getfilesdata(files){
    let filesData="";
    for(let i=0;i<files.length;i++){
        if(!fs.existsSync(files[i])){
            console.log("one or more file doesnt exist!");
            return;
        }
        if(i==files.length-1){
            filesData+=fs.readFileSync(files[i]);
        }
        else {
        filesData+=fs.readFileSync(files[i])+"\n";
        }
    }
    return filesData;
}

function applySFlag(f1data){
    let emptyInclude=false;
    let removedSpaces=[];
let splitteddata=f1data.split("\r\n");
for(let i=0;i<splitteddata.length;i++){
    if(splitteddata[i]==''&&emptyInclude==false){
        removedSpaces.push(splitteddata[i]);
        emptyInclude=true;
    }
    else if(splitteddata[i]!=''){
        removedSpaces.push(splitteddata[i]);
        if(i<splitteddata.length-2) emptyInclude=false;
    }
}
let removedSpacesString=removedSpaces.join("\r\n");
return removedSpacesString;

}
function applyBFlag(f1data){
    let count=1;
    let splitteddata=f1data.split("\r\n");
    for(let i=0;i<splitteddata.length;i++){
      if(splitteddata[i]!=''){
          splitteddata[i]= `${count}. ${splitteddata[i]}`;
          count++;
      }
    }
    
    let bflaggedString=splitteddata.join("\r\n");
    return bflaggedString;
}
function applyNFlag(f1data){
    let count=1;
let splitteddata=f1data.split("\r\n");
for(let i=0;i<splitteddata.length;i++){
   splitteddata[i]=`${count}.${splitteddata[i]}`;
   count++;
}
let nflaggedString=splitteddata.join("\r\n");
return nflaggedString;
}


module.exports.getfilesdata=getfilesdata;
module.exports.applySFlag=applySFlag;
module.exports.applyBFlag=applyBFlag;
module.exports.applyNFlag=applyNFlag;