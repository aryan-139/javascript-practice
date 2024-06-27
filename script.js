const inputText=document.getElementById("input");
const tasks=document.getElementById("tasks");

function addTask(){
    if(inputText.value===""){
        alert("Please enter a task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputText.value;
        tasks.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="&times;";
        li.appendChild(span);
    }
    inputText.value="";
    save();
}

tasks.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        console.log("clicking on li");
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.style.display="none";
        save();
    }
},false);

function save(){
    localStorage.setItem("tasks",tasks.innerHTML);
}

function load(){
    tasks.innerHTML=localStorage.getItem("tasks");
}

load();