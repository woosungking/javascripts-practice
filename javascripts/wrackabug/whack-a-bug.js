

let count=0;
let tomb=[]; //죽은벌레 저장

function whackBug(event){
  if(event.target.classList.contains("die")){
    return;
  }
  ++count;
  event.target.classList.add("die");
  tomb.push(event.target); // 죽은 벌래 저장
  event.target.src="./images/die.png";
  score.innerText=count;

}


const images = document.querySelectorAll("#bug-container img");
images.forEach(element=>{
  element.addEventListener("click",function(event){
    whackBug(event);
  });
});

let selectedImg=[];


let onOff=0; 
const game = document.querySelector("#game");
const score = document.querySelector("#score");
function startGame() { // 게임 시작
  for (let i = 0; i < 6; i++) {
    let random;
    
    do {
        random = Math.floor(Math.random() * 24);
        
    } while (selectedImg.includes(random));
    selectedImg.push(random);
    images[random].classList.add("hidden");  
    }

    console.log("벌레 배치중");
      console.log("게임시작");
      game.classList.remove("hidden");
      
    

}



function revival(){
  console.log("벌레 부활 중");
  for (let i = 0; i < selectedImg.length; i++) {
    if (images[selectedImg[i]].classList.contains("hidden")) {
        images[selectedImg[i]].classList.remove("hidden");
      }
  }
  console.log("죽은 벌레")
  console.log(tomb);
  tomb.forEach(element=>{
    element.src="./images/bug.png";
    element.classList.remove("die");
    });

  count=0;
  score.innerText=count;
  selectedImg.length=0;
  startGame();
  
} 


  
  
"use strict";
(function() {

  window.addEventListener("load", init);


  function init(){

    const startButton = document.querySelector("#start");
    startButton.addEventListener("click",function(){
    if(onOff==0){ //최초실행
      onOff=1;
      startGame();
    }
    else{ // 2트
      revival();
    }
  });
  }
  
  


})();


