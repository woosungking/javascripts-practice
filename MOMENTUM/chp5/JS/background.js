const images = ["./images/01.jpg", "./images/02.jpeg","./images/04.jpeg"];


function createBgImg(){

    const image = images[Math.floor(Math.random()*images.length)];

    const bgimage = document.createElement("img");
    bgimage.src = image;
    document.body.appendChild(bgimage);
    
}



// setInterval(createBgImg, 2000);

createBgImg();
