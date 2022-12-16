const API_KEY = '4841e20dc74a42dc9ee91407221612';

const cityField = document.querySelector('.city');
const iconField = document.querySelector('.icon');
const degreesField = document.querySelector('.degrees');
const descField = document.querySelector('.description');

const searchCountryBtn = document.querySelector('.country-picker > .btn');
const countrySearchBar = document.querySelector('.country-picker > input');
let countryOld = 'Netherlands'; // Quick fix
let country = countryOld;


function successCallback(data) {
    console.log(data)
    if (!data.hasOwnProperty('error'))
    {
        const curr = data.current;
        const desc = curr.condition.text;
        const tempC = curr.temp_c;
        const icon = curr.condition.icon.replace('64x64', '128x128');
        const city = data.location.name;
        
        cityField.innerText = city;
        iconField.innerHTML = `<img src="${icon}" alt="">`;
        degreesField.innerText = `${tempC}°C`;
        descField.innerText = desc;
        countryOld = country;
    } else {
        console.log(data.error)
        country = countryOld;
    }

}


function failureCallback(err) {
    alert(err);
}

function fetchData() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${country}`).then(
        (response) => {
            response.json().then(
                successCallback,
                failureCallback
            );
        }, 
        failureCallback
    );
}





searchCountryBtn.addEventListener('click', () => {
    country = countrySearchBar.value;
    fetchData();
})

fetchData();

setInterval(fetchData, 5000);



