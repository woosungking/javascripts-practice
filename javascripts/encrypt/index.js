

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

    text = text.toLowerCase(); // 소문자로 처리

    ascciiStr(text);
    
    
}



const textBox = document.querySelector("#input-text");
const result = document.querySelector("#result");

let asciiCode=[];
let encrypt=[];

function ascciiStr(text){
    
    for(let i =0; i<text.length; i++){
        if(text[i]==" "){
            asciiCode.push(" ");
        }
        else{
        let chr = text.charCodeAt(i);
        asciiCode.push(chr);
    }

    }

    console.log(asciiCode);
    
    encryptStr();
    // encryptRanStr();
} 

function encryptStr(){
    
    let ENCRYPT_CODE = 1; // 시프팅 범위 
    //'a' ~ 'z' : 97 ~ 122
    
    for(let i=0; i<asciiCode.length; i++){
        let temp;
        if(asciiCode[i]!=" "){ // 공백문자 제외
            temp = asciiCode[i] + ENCRYPT_CODE;
            asciiCode[i] = String.fromCharCode(temp);
            }
        }

    printEncrypt();
    }
    

function encryptRanStr(){
    let ENCRYPT_CODE= Math.floor((Math.random()+1)*9); //

    for(let i=0; i<asciiCode.length; i++){
        
        if(asciiCode[i]!=" "){
            asciiCode[i] = asciiCode[i] + ENCRYPT_CODE;   // 공백문자 제외
            }
        }
        
    printEncrypt();
    }



function printEncrypt(){
    const show = asciiCode.join("");

    result.innerText = show;
    asciiCode=[];
}

//reset 버튼 클릭시 텍스트 박스 지워짐
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);

function reset(){
    console.log("니에미");
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

