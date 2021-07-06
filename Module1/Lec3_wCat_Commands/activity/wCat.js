let fs=require("fs");
const {getfilesdata, applySFlag, applyBFlag, applyNFlag}=require("./util");
let contents= process.argv.slice(2);//slice 2nd index se sari chije chiye
//console.log(contents);

const flags=[];
const files=[];
for(let i=0;i<contents.length;i++){
  if(contents[i].startsWith("-")){
      flags.push(contents[i]);
  }
  else{
      files.push(contents[i]);
  }
}

let filesData=getfilesdata(files);

if(flags.includes("-s")){
 filesData=applySFlag(filesData);
}

if(flags.includes("-b")&&flags.includes("-n")){
  if(flags.indexOf("-b")<flags.indexOf("-n")){
    filesData=applyBFlag(filesData);
  }else{
     filesData=applyNFlag(filesData);
  }
}
else if(flags.includes("-b")){
filesData=applyBFlag(filesData);
}
else if(flags.includes("-n")){
filesData=applyNFlag(filesData);
}
console.log(filesData);