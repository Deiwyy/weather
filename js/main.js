const API_KEY = '4841e20dc74a42dc9ee91407221612'


const button = document.querySelector('.show-weather-button');
const countryInput = document.querySelector('.country-input');



function successCallback(data) {
    console.log(data)
}


function failureCallback(err) {
    alert(err)
}



button.addEventListener('click', () => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${countryInput.value}`).then(
        (response) => {
            response.json().then(
            successCallback,
            failureCallback
            )
        }, 
        failureCallback
    );
})