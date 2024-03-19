
// function onLoginBtnClick(){
//     console.dir(loginInput);
//     console.log("ss");
// }
// input Value에 null값이 들어오면 안좋아서 수정할거임.

//------------------------------------------------------------------------------------------

// function onLoginBtnClick(loginInput){
//     const value = loginInput.value;
//     if(value===""){
//         alert("Write Your Name");
//     }
//     else if(value.length>5){
//         alert("your name too long");
//     }
//     else{
//         alert("OK");
//     }
// }

// loginButton.addEventListener("click", function (){ onLoginBtnClick(loginInput)});

//------------------------------------------------------------------------------------------

// function onSubmit(event){ // 이런 함수의 첫번째 매개변수는 이벤트에 대한 정보들을 가지고 있다고함.
//     event.preventDefault(); 
//     const value = loginInput.value;
//     alert(value);
//     console.log(event);
//     console.log(loginInput);
// }

// loginForm.addEventListener("submit", onSubmit);

//------------------------------------------------------------------------------------------

// function onLogin(loginInput, loginForm){
//     event.preventDefault();
//     const hello = document.querySelector(".say-hello");
//     const name = loginInput.value;

//     loginForm.classList.add("hidden");

//     hello.innerText = 'Hello ' + name; // 이름과 인사말 결합 수정
//     hello.innerText = `hello ${name}`;
//     localStorage.setItem("username", name);
    
//     hello.classList.remove("hidden");
// }

// loginButton.addEventListener("click", function(event){
//     event.preventDefault();
//     onLogin(loginInput, loginForm); // 함수 호출 시 loginForm 매개변수 추가
// });

//------------------------------------------------------------------------------------------

// Local Storage 에 내용이 있으면 form태그(로그인)을 숨기고 else 경우에는 form 태그가 나타나게.

const loginForm= document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
// const hiddenTag = document.querySelector("#say-hello h1");
const hiddenTag = document.getElementById("say-hello");


 const USER_NAME = "username";


function onOffForm(){
    
    loginForm.classList.toggle("hidden");
}
function onOffTag(){
    hiddenTag.classList.toggle("hidden");
}

function tagInnerText(){
    hiddenTag.innerText = `환영합니다. ${savedName}`;
}

function saveName(loginInput){
    
    const username = loginInput.value;
    
    localStorage.setItem(USER_NAME, username);
    
    onOffForm();
    onOffTag();
}




const savedName = localStorage.getItem(USER_NAME);

if(savedName === null){
    loginButton.addEventListener("click", function(event){
        event.preventDefault();
        saveName(loginInput);
    });
}
else{
    onOffForm();
    onOffTag();
    tagInnerText();

} 

