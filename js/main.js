const API_KEY = '4841e20dc74a42dc9ee91407221612'


const button = document.querySelector('.show-weather-button');
const countryInput = document.querySelector('.country-input');


function update() {
    
}





function successCallback(data) {
    const curr = data.current;
    const feelsLikeC = curr.feelslike_c;
    const gustKmh = curr.gust_kph;
    const precipMM = curr.precip_mm;
    const tempC = curr.temp_c;
    const city = data.location.name;
}


function failureCallback(err) {
    alert(err);
}



button.addEventListener('click', () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${countryInput.value}`).then(
        (response) => {
            response.json().then(
            successCallback,
            failureCallback
            );
        }, 
        failureCallback
    );
})