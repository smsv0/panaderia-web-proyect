const button = document.querySelector(".btn-flip")
const flipcard = document.querySelector(".flipcard")
const buttonB = document.querySelector(".btn-flip-back")

       button.addEventListener("click", () =>{
        flipcard.classList.toggle("active");
       });

       buttonB.addEventListener("click", () =>{
        flipcard.classList.toggle("active");
       });

       window.addEventListener("DOMContentLoaded", () =>{
        if(window.location.hash === "#register")
        {
            flipcard.classList.toggle("active");
        }
       })