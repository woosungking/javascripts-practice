const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const username = document.querySelector("#login-input")

let toDos = JSON.parse(localStorage.getItem(`${username}_toDos`)) || [];


function saveDos(){
    localStorage.removeItem(`${username}_toDos`);

    localStorage.setItem(`${username}_toDos`, JSON.stringify(toDos));

}

function showDos(){
    
    if(toDos.length!=0){
        
        for(let i =0; i < toDos.length;i++ ){

            const li = document.createElement("li");
            const span = document.createElement("span");
            span.innerText = toDos[i];
            li.appendChild(span);

            const button = document.createElement("button");
            button.addEventListener("click", deleteButton);
            button.innerText = "❤️‍🔥";
            li.appendChild(button);
            
            toDoList.appendChild(li);

        }
    }
    else{
        return;
    }
    

}

function deleteButton(event){
    const li = event.target.parentElement;
    li.remove();
    const toDoText = li.querySelector("span").innerText; // 삭제할 to-do의 텍스트 가져오기
    toDos = toDos.filter(todo => todo !== toDoText); // 삭제한 to-do를 배열에서 제거
    saveDos(); // 업데이트된 toDos 배열을 localStorage에 저장
    
}


function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=newToDo;

    const button = document.createElement("button");
    button.innerText = "❤️‍🔥";
    button.addEventListener("click",deleteButton);
    
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);

    toDos.push(newToDo);

    saveDos();
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo);
}

//showDos();
document.addEventListener("DOMContentLoaded", function() {
    showDos();
});

toDoForm.addEventListener("submit", handleToDoSubmit);