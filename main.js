//Variables

const add = document.querySelector("#add");
let uncheck=document.querySelector("#checked")
let tasks = document.querySelector("#tasks");
let task = document.querySelector(".task");
let box = document.getElementById("tasks");


const addTask = () => {
    let newTask = document.getElementById("newTask").value;
    let li = document.createElement("li");
    let input = document.createElement("input");
    let label=document.createElement("label");
    input.setAttribute("type","checkbox");
    input.setAttribute("onclick","valid");
    input.setAttribute("id","task-box");
    li.setAttribute("id","taskk")
    if(newTask!=""){
    label.appendChild(document.createTextNode(newTask));
    tasks.appendChild(li);
    li.appendChild(input);
    li.appendChild(label);
    }
}
const valid = () =>{

    if(document.querySelector('#task-box:checked') !== null){

        let changer = document.querySelector('#task-box:checked').nextElementSibling.innerHTML;
        let li = document.createElement("li");
        let input = document.createElement("input");
        let label=document.createElement("label");
        input.setAttribute("type","checkbox");
        //input.setAttribute("checked");
        label.appendChild(document.createTextNode(changer));
        uncheck.appendChild(li);
        li.appendChild(input);
        li.appendChild(label);
        console.log(changer);
        tasks.querySelector('#task-box:checked').parentElement.remove();
        console.log("")
        //tasks.querySelector('#task-box:checked').nextElementSibling.remove(li);
        //tasks.querySelector('#task-box:checked').remove(li);

    }



            
}

add.addEventListener("click", addTask);
box.addEventListener("click",valid);


