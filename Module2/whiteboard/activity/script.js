let canvas=document.querySelector("#canvas");
let ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight-100;

window.addEventListener("resize",function(e){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight-100;
});
let linesDb=[];
let ispendown=false;
let line=[];
let redolinedb=[];

canvas.addEventListener("mousedown",function(e){
if(redolinedb.length){
    redolinedb=[];
}
ispendown=true;
let {clientX,clientY}=e;
clientY=clientY-100;
ctx.beginPath();
ctx.moveTo(clientX,clientY);
let lineobj={
    x:clientX,
    y:clientY,
    type:"md"
}
line.push(lineobj);

});

canvas.addEventListener("mousemove",function(e){
if(ispendown){
let {clientX,clientY}=e;
clientY=clientY-100;
ctx.lineTo(clientX,clientY);
ctx.stroke();
let lineobj={
    x:clientX,
    y:clientY,
    type:"mm"
}
line.push(lineobj);}
});

canvas.addEventListener("mouseup",function(e){
ispendown=false;
linesDb.push(line);
line=[];
});


