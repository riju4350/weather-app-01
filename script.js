const searchCountry = document.querySelector(".search-country");
const searchButton = document.querySelector(".search-button");

async function checkWeather (countryName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&units=metric&appid=27e6dc585b4e91012b40f49699562a2a`);
    var data = await response.json();
    console.log(data) 
    
    document.querySelector('.country-name').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ' °c';

}

searchButton.addEventListener('click', ()=> {checkWeather(searchCountry.value);})


