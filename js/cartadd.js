const addtocartbutton = document.querySelectorAll(".btn-card")


    addtocartbutton.forEach(addTocart => {
        addTocart.addEventListener("click", addtocartclicked)
    })

    const pContain = document.querySelector(".p-contain")

    function addtocartclicked(event) {
       const button = event.target;
       const item = button.closest(".cards");

       const itemTitle = item.querySelector(".title").textContent;
       const itemImg = item.querySelector(".img-itm").src
       const itemPrice = item.querySelector(".price").textContent;


       addToShoppingCard(itemImg, itemTitle, itemPrice);
    }

    function addToShoppingCard(itemImg, itemTitle, itemPrice) {
      const shoppingCartRow = document.createElement('div')
      const contentCart = `<div class="productos">
            <div class="contenido">
                <div class="pd-img">
                    <img src=${itemImg} alt="">
                </div>

                <div class="producto-items">
                    <p class="nombre">${itemTitle}</p>
                    <span class="price">${itemPrice}</span>
                    <div class="btn-cant">
                         <input type="number" name="" id="" class="quantity" value="1">
                    </div>
                </div>
                
            </div>
        </div>`
        shoppingCartRow.innerHTML = contentCart
        pContain.append(shoppingCartRow)

        updatetotal()
    }

    function updatetotal() {
        let total = 0;
        const cartTotal = document.querySelector(".total");
        const itemsCart = document.querySelectorAll(".productos");
    
        itemsCart.forEach(item => {
            const priceElement = item.querySelector(".price");
            
            // Quita el "$" y los puntos de miles, luego convierte a número
            const textPriceItem = Number(
                priceElement.textContent.replace("$", "").replace(/\./g, "")
            );
    
            const quantityItems = item.querySelector(".quantity");
            const quantity = Number(quantityItems.value);
    
            total = total + textPriceItem * quantity;
        });
    
        // Formatea el total con puntos de miles (ej: 32.000)
        const totalFormateado = total.toLocaleString("es-CO");
    
        cartTotal.innerHTML = `Precio Total: $${totalFormateado} COP`;
    }

    
    
    