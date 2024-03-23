const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input"); //검증 필요
const greeting = document.querySelector("#greeting"); // 검증필요

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function firstStep(event){
    event.preventDefault();
    const savedUsername = localStorage.getItem(USERNAME_KEY);

    if(savedUsername == null){
        onLoginSubmit();
    }
    else{
        loginForm.classList.add(HIDDEN_CLASSNAME);
        paintGreetings(savedUsername);
    }

}


function onLoginSubmit(event){
    
    loginForm.classList.toggle(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);

    paintGreetings(username);
    

}

function paintGreetings(username){
    
    greeting.classList.toggle(HIDDEN_CLASSNAME);

    greeting.innerText="안녕";

}

loginForm.classList.toggle(HIDDEN_CLASSNAME);

loginForm.addEventListener("submit", firstStep);




