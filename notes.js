let btn=document.getElementById("addbtn");
showNotes();
btn.addEventListener("click",function(e){
    let adtxt=document.getElementById("addtxt");
    let adtit=document.getElementById("addtitle");
    let notes=localStorage.getItem("notes");
    if(notes==null){

        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    obj={
        title:adtit.value,
        text:adtxt.value
    }
    notesObj.push(obj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    adtxt.value="";
    adtit.value="";
    showNotes();
});

function showNotes(){
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[]
    }else{
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index){
        html+=`<div class="notecard my-3 mx-3" id="noteCard" style="width: 18rem; box-shadow: grey 10px 10px 10px;
        transition: 0.4s; ">
       
        <div class="card-body">
          <h5 class="card-title">${element.title} </h5> 
          <p class="card-text">${element.text}</p>
          <button id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
        </div>
      </div>`
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
      notesElm.innerHTML = html;
    } else {
      notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}
    function deleteNote(index){
        let notes=localStorage.getItem("notes");
        if(notes==null){
            notesObj=[];
        }else{
            notesObj=JSON.parse(notes);
        }
        notesObj.splice(index,1);
        localStorage.setItem("notes",JSON.stringify(notesObj));
        showNotes();
    }
let search=document.getElementById("searchtxt");
search.addEventListener("input",function(){
    let inputVAl=search.value.toLowerCase();
    let notesCards=document.getElementsByClassName("notecard");
    Array.from(notesCards).forEach(function(element){
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputVAl)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
    })
});