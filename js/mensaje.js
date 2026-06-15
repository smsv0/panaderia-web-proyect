const boton = document.querySelector(".comprar")

     boton.addEventListener("click", () =>{
        const numero = "3021287930"
        const mensaje = "hola como estas"

        window.open(`https://wa.me/${numero}?text=${
        encodeURIComponent(mensaje)}`, "_black")
     })

