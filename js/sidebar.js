const btnCar = document.querySelector(".cart-btn")
const sidebar = document.querySelector(".sidebar")
const iconChange = document.querySelector(".icon-change");
const iconOrigin = document.querySelector(".icon-origin")


   btnCar.addEventListener("click", () => {
      sidebar.classList.toggle("active")
      btnCar.classList.toggle("active")
      iconChange.classList.toggle("active")
      iconOrigin.classList.toggle("active")
   })

