//console.log("i ran into browser");
//console.log(document);

let addtodobutton=document.querySelector(".add-todo");
let todoinput=document.querySelector(".todo-input");
let todosmaal=document.querySelector(".todos-list-container");

 addtodobutton.addEventListener("click",function(){
 addtodo();
});
todoinput.addEventListener("keypress",function(e){
    if(e.key=="Enter"){
        addtodo();
    }
});

function addtodo(){
    let todoinputvalue=todoinput.value;
    if(todoinputvalue){
        appendtodo(todoinputvalue);
        todoinput.value="";
    }
};


function appendtodo(data){
       let todoitemdiv=document.createElement("div"); //create div
        todoitemdiv.classList.add("todo-item");//div of class todo-item
   
      let ptag=document.createElement("p"); //ptag create of class todo-input content data
      ptag.classList.add("todo");
      ptag.textContent=data;

     let deletebtn=document.createElement("button");
     deletebtn.classList.add("delete-todo");
     deletebtn.textContent="delete";
     deletebtn.addEventListener("click",deletef);//ye event sabhi delete button ke sath attach hoga

     todoitemdiv.append(ptag);
     todoitemdiv.append(deletebtn);

     todosmaal.append(todoitemdiv);  //sabse bade div me ye chota div append kra

     /*  <div class="todo-item">
           <p class="todo-input">Learn css</p>
           <button class="delete-todo">delete</button>
       </div> */
};

function deletef(e){
 e.target.parentNode.remove();
}









//console.log(addtodobutton);

//for click
/* addtodobutton.addEventListener("click",function(e){
    //console.log("jo bhi kaam krana hai click hone pe");
     let todoinputvalue = todoinput.value;
    if(todoinputvalue){
    console.log(todoinputvalue);
    todoinput.value="";
    } 
    //console.log(event);
}) */

//for keypress entre

/* todoinput.addEventListener("keypress",function(e){
    //console.log(e);
    let todoinputvalue=todoinput.value;
    if(e.key=="Enter"){           //or e.target.value
      console.log(todoinputvalue);
      todoinput.value="";
    }
}) */

// both click and enter

/* addtodobutton.addEventListener("click",addtodo);
todoinput.addEventListener("keypress",addtodo);

function addtodo(e){
   let todoinputvalue=todoinput.value;
    if((e.type=="keypress"&& e.key=="Enter")||e.type=="click"){
     console.log(todoinputvalue);
     todoinput.value="";
    }
} */