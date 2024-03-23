const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("안농");
}

function getClock(){
    const date = new Date();
    // clock.innerText= `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    // console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);

    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hour} : ${minute} : ${second}`;

}

setInterval(getClock,100);