const inp1=document.getElementById("inp1");
const listCont=document.getElementById("list-container");

function local(){
    if(inp1.value === "")
    {
        alert("add proper value");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inp1.value;
        listCont.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inp1.value="";
    saveData();
}
listCont.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
   
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
},false);
function saveData(){
    localStorage.setItem("data",listCont.innerHTML);
}
function showData(){
   listCont.innerHTML = localStorage.getItem("data");
}
showData();
function refresh(){
    location.reload();
}