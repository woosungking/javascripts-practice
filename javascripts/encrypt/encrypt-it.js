

(function() {
  "use strict";


  window.addEventListener("load", init);

  
  function init() {
    console.log("Window loaded!");

  }

  

})();


const encryptBtn = document.querySelector("#encrypt-it");
encryptBtn.addEventListener("click", function(){
    handleClick();
});


function handleClick(){
    console.log("Button clicked!");

    let text = textBox.value;

    if(type==0){
        shiftCipher(text);
    }else{
        generateCipher(text);
    }
    
    
}



const textBox = document.querySelector("#input-text");
const resultBox = document.querySelector("#result");


function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    
    resultBox.innerText = result;
  }

  function generateCipher(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let cipher = [];
    // it's poor style to hardcode a magic number like 26
    let alphabetLength = alphabet.length;
    for (let i = 0; i < alphabetLength; i++) {
      let randomIndex = Math.floor(Math.random() * alphabet.length);
      cipher.push(alphabet.splice(randomIndex, 1)[0]); 
    }
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] >= 'a' && text[i] <= 'z') {
        let letterCode = text.charCodeAt(i) - 'a'.charCodeAt(0);
        result += cipher[letterCode];
      } else {
        result += text[i];
      }
    }
    
    resultBox.innerText = result; 
  }
  




//reset 버튼 클릭시 텍스트 박스 지워짐
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);

function reset(){
    
    textBox.value="";
    result.innerText="";
}



const capsCheck = document.getElementById("all-caps");
capsCheck.addEventListener("change", function(){

    if(capsCheck.checked){
        result.classList.remove("lowercase");
        result.classList.add("uppercase");
    }
    else{
        result.classList.remove("uppercase");
        result.classList.add("lowercase");
    }
    
})


const fontRadio = document.querySelectorAll('input[name="text-size"]');
fontRadio.forEach(element => {
    element.addEventListener("change", function() {
        if (this.checked && this.value === "12pt") { // 수정: 비교 연산자를 사용하여 값 비교
            result.classList.remove("font24pt");
            result.classList.add("font12pt");
        } else if (this.checked && this.value === "24pt") { // 수정: 비교 연산자를 사용하여 값 비교
            result.classList.remove("font12pt");
            result.classList.add("font24pt");
        }
    });
});

let type=0;

const encryptType = document.querySelector("#cipher-type");
encryptType.addEventListener("change",function(){
    if(this.value=="shift"){
        type = 0;
    }
    else{
        type = 1;
    }
    
});



// const capsCheck = document.getElementById("all-caps");
// let caps;
// capsCheck.addEventListener("change",function(){
//     if(capsCheck.checked){
//         caps=1;
//         handleClick();
//     }
//     else{
//         caps=0;
//         handleClick();
//     }
// });

// --------------- 기존 로직------------------------

// function ascciiStr(text){
    
//     for(let i =0; i<text.length; i++){
//         if(text[i]==" "){
//             asciiCode.push(" ");
//         }
//         else{
//         let chr = text.charCodeAt(i);
//         asciiCode.push(chr);
//     }

//     }

//     console.log(asciiCode);
    
//     encryptStr();
//     // encryptRanStr();
// } 


// function encryptRanStr(){
//     let ENCRYPT_CODE= Math.floor((Math.random()+1)*9); //

//     for(let i=0; i<asciiCode.length; i++){
        
//         if(asciiCode[i]!=" "){
//             asciiCode[i] = asciiCode[i] + ENCRYPT_CODE;   // 공백문자 제외
//             }
//         }
        
//     printEncrypt();
//     }

// function encryptStr(){
    
//     let ENCRYPT_CODE = 1; // 시프팅 범위 
//     //'a' ~ 'z' : 97 ~ 122
    
//     for(let i=0; i<asciiCode.length; i++){
//         let temp;
//         if(asciiCode[i]!=" "){ // 공백문자 제외
//             temp = asciiCode[i] + ENCRYPT_CODE;
//             asciiCode[i] = String.fromCharCode(temp);
//             }
//         }

//     printEncrypt();
//     }
    