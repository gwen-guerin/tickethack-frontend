
window.addEventListener('load', () => {

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
          // console.log(trip, hour, price);
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

  });

  // function deleteCart() {
  //   for (const cart of document.getElementsByClassName('delete')) {
  //     cart.addEventListener('click' , () => {
  //       fetch('http://localhost:3000/trips/cart/delete', {
  //         method: 'DELETE',
  //       }).then(response => response.json()).then(data => {
  //         if (data.result) {
	// 					this.parentNode.remove();
	// 				}
  //       })
  //     })
  //   }
  // }

  // function updateDeleteCityEventListener() {
  //   for (let i = 0; i < document.querySelectorAll('.delete').length; i++) {
  //     document.querySelectorAll('.delete')[i].addEventListener('click', () =>{
  //       console.log("coucou")
  //       console.log(trip);
  //       const date = this.parentNode.myTime.value
  //       const price = this.parentNode.myPrice.value
  //       // console.log("coucou");
  //       fetch(`http://localhost:3000/trips/delete`, 
  //       { method: 'DELETE',
  //       body: JSON.stringify({ trip, date, price }) })
  //         .then(response => response.json())
  //         .then(data => {
  //             data.parentNode.remove();
  //         });
  //     });
  //   }    
  // }
  // updateDeleteCityEventListener() 
