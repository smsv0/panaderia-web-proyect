const selctor = document.querySelectorAll(".preguntas")


        selctor.forEach((item) => {
            item.addEventListener("click", () => {
               const anw = item.querySelector(".anw")
               anw.classList.toggle("active")
            })
        })
     
     