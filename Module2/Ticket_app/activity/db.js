let mydb=window.localStorage;
let ticketcontainer=document.querySelector(".tickets-container");
let colorclass=["red","skyblue","orange","navy","brown"];


function datamanage(ticketinfo){
    let allTickets=mydb.getItem("allTickets");
    if(allTickets){
        
     allTickets=JSON.parse(allTickets);
     allTickets.push(ticketinfo);
     mydb.setItem("allTickets",JSON.stringify(allTickets));
    }else{
        let allTickets=[ticketinfo];
        mydb.setItem("allTickets",JSON.stringify(allTickets));
        
    }
}

function loadTicket(){
    let allTickets=mydb.getItem("allTickets");
    
    if(allTickets){
        allTickets=JSON.parse(allTickets);
        for(let i=0;i<allTickets.length;i++){
            let ticketinfo=allTickets[i];
            appendTicket(ticketinfo);
        }
    }

}
loadTicket();

function loadSelectedTickets(filter){
    let allTickets=mydb.getItem("allTickets");
    if(allTickets){
        allTickets=JSON.parse(allTickets);
        for(let i=0;i<allTickets.length;i++){
            let ticketinfo=allTickets[i];
            if(ticketinfo.tf==filter){
                appendTicket(ticketinfo);
            }
        }
    }
}

function appendTicket(ticketinfo){
    let {tf,tv,ticketid}=ticketinfo;
    let ticketdiv=document.createElement("div");
    ticketdiv.classList.add("ticket");
    ticketdiv.innerHTML=`<div class="ticket-header ${tf}"></div>
    <div class="ticket-content">
        <div class="ticket-info">
            <div class="ticket-id">#${ticketid}</div>
            <div class="ticket-delete fas fa-trash-alt"></div>
        </div>
        <div class="ticket-value"> ${tv} </div>
    </div>`;

    let ticketheader=ticketdiv.querySelector(".ticket-header");
    ticketheader.addEventListener("click",function(e){
        let currentfilter=e.target.classList[1];
        let indofcurrfil=colorclass.indexOf(currentfilter);
        let nidx=(indofcurrfil+1)%colorclass.length;
        let newfilter=colorclass[nidx];
        ticketheader.classList.remove(currentfilter);
        ticketheader.classList.add(newfilter);

        let allTickets=JSON.parse(mydb.getItem("allTickets"));
        for(let i=0;i<allTickets.length;i++){
            if(allTickets[i].ticketid==ticketid){
                allTickets[i].tf=newfilter;
            }
        }
        mydb.setItem("allTickets",JSON.stringify(allTickets));
    }) 

    let delebtn=ticketdiv.querySelector(".ticket-delete");
    delebtn.addEventListener("click",function(e){
        ticketdiv.remove();
        deleteticfromdb(ticketid);
    })
    ticketcontainer.append(ticketdiv);
}

function deleteticfromdb(ticketid){
    let allTickets=JSON.parse(mydb.getItem("allTickets"));
    let updatedtick=allTickets.filter(function(ticketobject) {
       if(ticketobject.ticketid==ticketid){
           return false
       }
       return true;
    })
    mydb.setItem("allTickets",JSON.stringify(updatedtick));
}
