function enterMouse(){
    alert("mouse moving");
    title.style.color="red";
}

function leaveMouse(){
    alert("mouse was left");
    title.style.color="green";
}

function windowCopy(){
    alert("copied");
}
function windowOffline(){
    alert("SOS on WIFI");
}
function windowResize(){
    document.body.style.backgroundColor="tomato";   
}
function windowOnline(){
    alert("WIFI is good");

}


const title = document.getElementById("title");
console.log("title:", title); // title 변수 출력
console.log("Hello, world!"); // 기타 메시지 출력



title.onClick=clickTitle;
// 이렇게도 사용가능
title.addEventListener("mouseenter",enterMouse);
