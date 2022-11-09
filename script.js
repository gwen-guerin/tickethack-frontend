// import {clickOnBook} from './cart.js'

document.querySelector('#submitButton').addEventListener('click', function () {
  const departure = document.querySelector('#departure').value;
  const arrival = document.querySelector('#arrival').value;
  const date = document.querySelector('#date').value;

  // console.log(document.querySelector('#departure').value);
  fetch('http://localhost:3000/trips', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ departure, arrival, date }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.trips.length === 0) {
        document.querySelector(
          '#trips-container'
        ).innerHTML = `<img id = "train-image" src = "./images/notfound.png">
        <hr>
        <p>No Trip Found</p>`;
      } else {
        document.querySelector('#trip-list').innerHTML = '';
        for (let item of data.trips) {
          const date = new Date(item.date.$date);
          document.querySelector(
            '#trip-list'
          ).innerHTML += 
          `<div class="tripAvailable"> 
          <span class = "tripToChoose trip-infos">${item.departure} > ${item.arrival}</span> 
          <span class="hour trip-infos">${moment(date).format("HH:MM")}</span> 
          <span class="price trip-infos">${item.price}€ </span>
          <button class="book trip-infos">Book</button> 
          </div>`;
        }
        if(data.trips.length > 6){
          console.log(data)
          document.querySelector('#trip-list').style.marginTop = "65vh"; 
        } else {
          document.querySelector('#trip-list').style.marginTop = "0px";
        }
      }

      clickOnBook()
    });
});

function clickOnBook(){
  for (const bookTrip of document.getElementsByClassName('book')) {
    bookTrip.addEventListener('click', () => {
      let trip = document.getElementsByClassName('tripToChoose').textContent
      let date = document.getElementsByClassName('hour').textContent
      let price = document.getElementsByClassName('price').textContent
      fetch('http://localhost:3000/trips', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trip, date, price }),
      })
        .then((response) => response.json())
        .then((data) => {console.log(data);})
        document.location.href="./cart.html"

    });
  }
}
