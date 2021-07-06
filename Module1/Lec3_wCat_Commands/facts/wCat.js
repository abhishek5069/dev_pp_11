const fs=require("fs");
let f1data=fs.readFileSync("./f1.txt","utf-8");
let f2data=fs.readFileSync("./f2.txt","utf-8");
let bothop=f1data+"\n"+f2data;
//both output
//console.log(bothop);



//lets apply -s flag on f1 ka data

function applySFlag(f1data){
    let emptyInclude=false;
    let removedSpaces=[];
let splitteddata=f1data.split("\r\n");
//console.log(splitteddata);
//[ 'Hey I am F1', '', '', '', '', '', 'Bye I am F1' ]
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
 let sflaggedString=applySFlag(f1data);
 //console.log(data1);



 //-b flag implement
 function applyBFlag(f1data){
let count=1;
let splitteddata=f1data.split("\r\n");
for(let i=0;i<splitteddata.length;i++){
  if(splitteddata[i]!=''){
      splitteddata[i]= `${count}. ${splitteddata[i]}`;
      count++;
  }
}
//console.log(splitteddata);
let bflaggedString=splitteddata.join("\r\n");
return bflaggedString;
 }
 let bflaggedString=applyBFlag(f1data);
 console.log(bflaggedString);



 //-n flag implement
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
 let nflaggedString=applyNFlag(f1data);
 console.log(nflaggedString);