

document.querySelector("#submitButton").addEventListener("click", function () {
  const departure = document.querySelector("#departure").value;
  const arrival = document.querySelector("#arrival").value;
  const date = document.querySelector("#date").value;

  console.log(document.querySelector("#departure").value);
  fetch("http://localhost:3000/trips", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ departure, arrival, date }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.trips.length === 0) {
        document.querySelector(
          "#trips-container"
        ).innerHTML = `<img id = "train-image" src = "./images/notfound.png">
        <hr>
        <p>No Trip Found</p>`;
      } else {
        document.querySelector("#trips-container").innerHTML = "";
        for (let item of data.trips) {
            const date = new Date(item.date.$date)
          document.querySelector(
            "#trips-container"
          ).innerHTML += `<div class="tripAvailable"> 
          <p><span class = "tripToChoose">${item.departure} > ${item.arrival}</span> <span class="hour">${date.getHours()}:${date.getMinutes()}</span> <span class="price>"${item.price}€ </span></p> 
          <button class="book">Book</button> 
          </div>`;
        }
      }
    });
});
