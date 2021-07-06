let sticky=document.querySelector("#sticky");

sticky.addEventListener("click",addSticky);

function addSticky(e){
    let stickyDiv=document.createElement("div");
    stickyDiv.classList.add("sticky");
    stickyDiv.innerHTML=`
    <div class="sticky-header">
        <div class="minimize"></div>
        <div class="close"></div>
    </div>
    <div class="sticky-content" contenteditable="true" spellcheck="false">
    </div>`
    document.body.append(stickyDiv);

let minimize=stickyDiv.querySelector(".minimize");
let close=stickyDiv.querySelector(".close");
let stickycontent=stickyDiv.querySelector(".sticky-content");
let stickyheader=stickyDiv.querySelector(".sticky-header");


minimize.addEventListener("click",function(e){
 stickycontent.style.display=="none" ? stickycontent.style.display="block": stickycontent.style.display="none" ;
})

close.addEventListener("click",function(e){
    stickyDiv.remove();
})

let stickyhold=false;
let initialX;
let initialY;

stickyheader.addEventListener("mousedown",function(e){
  stickyhold=true;
  initialX=e.clientX;
  initialY=e.clientY;
});
stickyheader.addEventListener("mousemove",function(e){
    if(stickyhold){
   let finalX=e.clientX;
   let finalY=e.clientY;
   let dx=finalX-initialX;
   let dy=finalY-initialY;

   let {top,left}=stickyDiv.getBoundingClientRect();
   stickyDiv.style.top=top+dy+"px";
   stickyDiv.style.left=left+dx+"px";
   initialX=finalX;
   initialY=finalY;
    }
});
stickyheader.addEventListener("mouseup",function(){
   stickyhold=false;
});


}