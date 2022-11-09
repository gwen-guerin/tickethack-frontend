

window.addEventListener("load", () => {
    fetch('http://localhost:3000/trips/cart')
    .then((response) => response.json())
    .then((carts) => {
      console.log(carts.carts);
      if (carts.carts.length > 0) {
        let blabla = document.getElementById('containerCart').children
        for (let i=0; i<blabla.length; i++) {
          blabla[i].style.display = "none"
        }
        for (let item of carts.carts) {
          const trip = item.trip;
          const hour = item.date;
          const price = item.price;
          document.getElementById('containerCart').innerHTML += 
          `     <div class="tripContainer">
                <div class="myTrip"> ${trip}</div>
                <div class="myTime">${hour}</div>
                <div class="myPrice">${price}</div>
                <button class="delete">X</button>
            </div>`
        }
      }
    });
    
  })

