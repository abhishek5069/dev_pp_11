let undo=document.querySelector("#undo");
let redo=document.querySelector("#redo");
undo.addEventListener("click",undoline);
redo .addEventListener("click",redoline);


function undoline(e){
    if(linesDb){
       let undoline=linesDb.pop();
       redolinedb.push(undoline);
       ctx.clearRect(0,0,canvas.width,canvas.height);
       drawlinesDb();
     }
}

function redoline(e){
    if(redolinedb.length){
  let redoLine=redolinedb.pop();
  for(let j=0;j<redoLine.length;j++){
      let lineobj=redoLine[j];
      if(lineobj.type=="md"){
          ctx.beginPath();
          ctx.moveTo(lineobj.x,lineobj.y);
      }else{
          ctx.lineTo(lineobj.x,lineobj.y);
          ctx.stroke();
      }
  }
  linesDb.push(redoLine);
  }
}

function drawlinesDb(){
    for(let i=0;i<linesDb.length;i++){
        let line=linesDb[i];
        for(let j=0;j<line.length;j++){
            let lineobj=line[j];
            if(lineobj.type=="md"){
               ctx.beginPath();
               ctx.moveTo(lineobj.x,lineobj.y);
            }else{
               ctx.lineTo(lineobj.x,lineobj.y);
               ctx.stroke();
            }
        }
    }
}


