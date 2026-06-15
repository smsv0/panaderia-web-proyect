const modal = document.querySelector(".inicio-sesion");
const icono = document.querySelector(".person");
const close = document.querySelector(".icon-sec")
const over = document.querySelector(".overlay")

    icono.addEventListener("click", () => {
        modal.classList.toggle("active");
        over.classList.toggle("active");
    });

    close.addEventListener("click", () => {
        modal.classList.toggle("active");
        over.classList.toggle("active");
    });
    