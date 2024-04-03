"use strict";
function stringSlider(){
    let words = textArea.value.split(/[ \t\n]+/);
    //단어는 쪼개져서 배열안에 들어갈거임.
    let j=0;
    for(let i =0; i<words.length; i++){
        let regex = new RegExp(`[${certainChars.join('')}]`);    
    
        if(regex.test(words[i])){ 
             words.splice(i,0,words[i]);
             i++
        }
    } 

    showWords(words,j);
    
}


function showWords(words, j){
    
    if(j < words.length && onOff==true){
        
        stop.disabled=false
        show.style.fontSize = buttonValue;
        show.innerText = words[j];
        j++;   
        console.log(buttonValue);
        console.log(speedValue);
        
        setTimeout(function() {
            showWords(words, j);
        }, speedValue);

    } 
    else if(onOff==false){
        show.innerText="";
        stop.disabled=true;
    }
    else{
        onOff=false;
        show.innerText="";
        stop.disabled=true;
    }
}



const textArea = document.querySelector("#text-area");
const show = document.querySelector(".first-text-box");

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
stop.disabled=true;

const certainChars = ["!","?",".",","]
const result =[];




const radioButton = document.querySelectorAll('input[type="radio"][name="size"]');
let buttonValue = document.querySelector('input[type="radio"][name="size"]:checked').value;

radioButton.forEach(element => {
    element.addEventListener("change", function(){
        if(this.checked)
            buttonValue = this.value;
    });
});



const speedDropdown = document.querySelector('.speed-container select');
let speedValue = document.querySelector(".speed").value;

speedDropdown.addEventListener('change', function() {
    speedValue = this.value;
    console.log(speedValue);
});




let onOff=false;
start.addEventListener("click",function(){

    if(!onOff){
        onOff=true;
        stringSlider();    
    }
    
}); //연속으로 눌리는 현상방지



stop.addEventListener("click",function(){
    onOff=false;
});
