

window.addEventListener("load", () => {
    fetch('http://localhost:3000/trips/cart').then(response => response.json())
    .then(carts => {
        console.log(carts.carts[0]);
        const trip = carts.carts[0].trip
        const hour = carts.carts[0].date
        const price = carts.carts[0].price
        document.getElementById('containerCart').innerHTML = 
        `<div>My cart</div>
        <div> ${trip}</div>
        <div>${hour}</div>
        <div>${price}</div>
        <footer><div>Total : 4000</div><button>Purchase</button>`
    })
})

