let filters=document.querySelectorAll(".filters");
//let ticketcontainer=document.querySelector(".tickets-container");

 for(let i=0;i<filters.length;i++){
    filters[i].addEventListener("click",selectfilter);
}
function selectfilter(e){
    if(e.target.classList.contains("active-filter")){
        e.target.classList.remove("active-filter");
        ticketcontainer.innerHTML="";
        loadTicket();
    }else{
        if(document.querySelector(".active-filter")){
            document.querySelector(".active-filter").classList.remove("active-filter");
        }
        e.target.classList.add("active-filter");
        ticketcontainer.innerHTML="";
        let manfilter=e.target.classList[1];
        loadSelectedTickets(manfilter);
    }
    

}    

let seticketmodal=document.querySelector(".open-modal");
let clticketmodal=document.querySelector(".close-modal");
let ticketmodalbool=false;
let istexttyped=false;

seticketmodal.addEventListener("click",openticketmodal);
clticketmodal.addEventListener("click",closeticketmodal);

function openticketmodal(e){
    if(ticketmodalbool){
        return;
    }
    let outerdiv=document.createElement("div");
    outerdiv.classList.add("ticket-modal");
    outerdiv.innerHTML=`<div class="ticket-text" contenteditable="true" spellcheck="false">Enter your text !</div>
    <div class="ticket-filters">
      <div class="tickets-filter red selected-filter"></div>
      <div class="tickets-filter skyblue"></div>
      <div class="tickets-filter orange"></div>
      <div class="tickets-filter navy"></div>
      <div class="tickets-filter brown"></div>
    </div>`;
    document.querySelector(".tickets-container").append(outerdiv);
    ticketmodalbool=true;
    istexttyped=false;

    let tickettextdiv=outerdiv.querySelector(".ticket-text");
    tickettextdiv.addEventListener("keypress",handletext);

    let tticketfilters=outerdiv.querySelectorAll(".tickets-filter");
    
    for(let i=0;i<tticketfilters.length;i++){
          tticketfilters[i].addEventListener("click",function(e){
              if(e.target.classList.contains("selected-filter")){
                  return;
              }
              document.querySelector(".selected-filter").classList.remove("selected-filter");
              e.target.classList.add("selected-filter");
          });
    }
}

function closeticketmodal(e){
    if(ticketmodalbool){
    document.querySelector(".ticket-modal").remove();
    ticketmodalbool=false;
     istexttyped=false;}
}

function handletext(e){
    if(e.key=="Enter" && istexttyped && e.target.textContent){
        let sefilter=document.querySelector(".selected-filter").classList[1];
         let ticketid=uuid();
        let ticketinfo={tf:sefilter,tv:e.target.textContent,ticketid:ticketid};
        appendTicket(ticketinfo);
        clticketmodal.click();
        datamanage(ticketinfo);
    }
    if(!istexttyped){
        istexttyped=true;
        e.target.textContent="";
    }
}








