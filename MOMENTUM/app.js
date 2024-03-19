// function handleMouseEnter(){
//     this.innerText="Mouse is here"

//     if(this.style.color==="blue"){
//         this.style.color="tomato";
//     }
//     else{
//         this.style.color==="blue";
//     }
// }


// function handleMouseEnter(){

//         if(this.className === "active"){
//             this.className="";
//         }else
//         this.className="active";
// }

// function handleMouseEnter() {
//     if (this.classList.contains("active")) {
//         this.classList.remove("active");
//     } else {
//         this.classList.add("active");
//     }
// }

function handleMouseenter(){
    this.classLists.toggle("title");
}



const tag = document.getElementById("title");
tag.style.color="blue";
tag.addEventListener("click", handleMouseEnter);