let country = document.getElementById('country');
let city = document.getElementById('city');
let check = document.getElementById('check');


let tempIcon = document.getElementById('tempIcon');
let weatherCountry = document.getElementById('weatherCountry');
let tempertaure = document.getElementById('temperature');
let weatherDescription = document.getElementById('weatherDescription');
let feelslike = document.getElementById('feelslike');
let humidity = document.getElementById('humidity');
let longitude = document.getElementById('longitude');

check.addEventListener('click',function(){
    // console.log(country.value);
    // console.log(city.value);

let key = `e7596d58cd7eb7b01b741d769ba3740f`;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key}`;
fetch(url)
.then(response => response.json())
.then(data => displayData(data));
});


function displayData(data){
    console.log(data);

weatherCountry.innerText = `${data.name} /${data.sys.country}`;

tempertaure.innerHTML = `${data.main.temp} ° <b> C </b> `
data.weather.forEach(items =>{

weatherDescription.innerText = items.description;

let iconsForTemp =` http://openweathermap.org/img/wn/10d@2x.png`;
tempIcon.src = iconsForTemp;
feelslike.innerText =`Feels like ${data.main.feels_like}°C `
humidity.innerText =`Humidity ${data.main.humidity}`
latitude.innerText =`Laitude ${data.coord.lat}`
longitude.innerText =`Longitude ${data.coord.lon}`


})




}
