//익명의 함수가 처음에 있길래 이용했습니다.

const chgButton = document.querySelector("#colorify");

function createBgColor(){

  let randomNum = Math.floor(Math.random()*16777216);

  let hexNum = "#"+randomNum.toString(16).padStart(6,'0');

  return hexNum

}

"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {

    let bgColor = createBgColor();
    document.body.style.backgroundColor = bgColor;
    changeBackgroundColor(bgColor);
    
  }


  function changeBackgroundColor(bgColor) {
    
    document.getElementById("my-color").innerText = `Your Color is ${bgColor}!`;
  }

})();

function init_1() {
  
  let bgColor = createBgColor();
  document.body.style.backgroundColor = bgColor;
  changeBackgroundColor_1(bgColor);
  
}


function changeBackgroundColor_1(bgColor) {
  
  document.getElementById("my-color").innerText = `Your Color is ${bgColor}!`;
}



chgButton.addEventListener("click", function(){

  init_1();
});