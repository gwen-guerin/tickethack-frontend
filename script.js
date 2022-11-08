
document.querySelector('#submitButton').addEventListener('click', function(){

    const departure = document.querySelector("#departure").value;
    const arrival = document.querySelector("#arrival").value
    const date = document.querySelector("#date").value

    console.log(document.querySelector("#departure").value)
    fetch("http://localhost:3000/trips", {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ departure , arrival, date }),
	}).then(response => response.json()).then(data => {if(data.trips.length === 0){
        console.log("hello")
    }})
})


