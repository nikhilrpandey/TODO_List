let form = document.querySelector("#form");
let input = document.querySelector("#chores");
let todoList = document.querySelector(".todo");
let dateTime = document.querySelector("#time")

form.addEventListener("submit",(e)=>{

    e.preventDefault();
    let todoText=input.value;
    input.value="";
    if(todoText){
        let list = document.createElement("li");
        list.innerText=todoText;

        //This is for strikethrough text
        list.addEventListener('click',()=>{
            list.classList.toggle("completed");

        })

        //Appeding the child node to the 
        todoList.appendChild(list);


    }

});