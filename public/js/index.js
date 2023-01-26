// const { response } = require("express");

const timeHome = document.getElementById('time-home');
const dayHome = document.getElementById('day-home');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
// const containers = document.getElementById('containers');
const homeCityRow = document.getElementById('home-city-row');
const currContainer = document.getElementById('curr-container');
const currentTempEl = document.getElementById('current-temp');
// const formEl= document.getElementById("custom-city-form");

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


const API_KEY= "c7e52ccc02d5cdacb15b99767de46eec";

let cityName, countryName;

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeHome.innerHTML = (hoursIn12HrFormat < 10? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dayHome.innerHTML = days[day] + ', ' + date + ' ' + months[month]

}, 1000);

getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude} = success.coords;

        let unit="metric";

        let url1= `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${unit}`;

        let geoUrl= `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;

        let url2= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`;
        
        // console.log(url1);
        
        fetch(geoUrl).then(res => res.json()).then(data => {
            // console.log(data)
            // console.log(geoUrl);
            cityName= data[0].state;
            // cityName= `${data[0].state},`;
            countryName= data[0].country;
            // cityName= data[0].name;
            // countryName= data[0].state;
            // console.log(cityName, countryName);
            // showCurrWeatherData(data);
        })
        
        fetch(url1).then(res => res.json()).then(data => {
            // console.log(data)
            // console.log(url1);
            showCurrWeatherData(data);
            // currCityName= data.name;
            // console.log(currCityName);
        })

        // fetch(geoUrl).then(res => res.json()).then(data => {
        //     // console.log(data)
        //     console.log(geoUrl);
        //     cityName= data[0].state;
        //     // cityName= `${data[0].state},`;
        //     countryName= data[0].country;
        //     // cityName= data[0].name;
        //     // countryName= data[0].state;
        //     // console.log(cityName, countryName);
        //     // showCurrWeatherData(data);
        // })
        
        fetch(url2).then(res => res.json()).then(data => {

            // console.log(data)
            // console.log(url2);
            showWeatherData(data);
            // console.log(formEl);
            // formEl.reset();
        })

    })
}

function showCurrWeatherData (data){

    let isDiv=`<div class="curr-city-country">${cityName},&nbsp;${countryName? countryName: ""}</div>`

    currContainer.innerHTML = `
                        <div class="curr-day">
                            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon" class="curr-icon">
                            <span class="curr-temp">${data.main.temp}&#176;C</span> 
                        </div>
                        <div class="curr-day-extra">
                            <span class="curr-pressure">Pressure:&nbsp;${data.main.pressure}&nbsp;hPa</span> 
                            <span class="curr-humidity">Humidity:&nbsp;${data.main.humidity}%</span> 
                            <span class="curr-wind">Wind:&nbsp;${data.wind.speed}&nbsp;m/s</span> 
                        </div>
                        <div class="curr-day-info">
                            <div class="curr-district">${data.name}</div>
                            ${cityName && countryName? isDiv : ""}
                            <div class="curr-description">${data.weather[0].description[0].toUpperCase() + data.weather[0].description.substring(1)}</div>
                        </div>
                    `;

                    // ${cityName && countryName? isDiv : ""}

                    // <div class="curr-city-country">${cityName? cityName: ""}&nbsp;${countryName? countryName: ""}</div>

                    // <div class="temp">Day - ${day.temp.day}&#176;C</div>
}

function showWeatherData (data){
    
    let Forecast = ''
    data.daily.forEach((day, idx) => {

        Forecast += `
            <div class="col-xl col-lg-3 col-md-4 col-sm-6 col-xs bootstrap-col">
                <div class="city-container">
                    <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                    <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                    <div class="temp-night bg-dark">Night: ${day.temp.night}&#176;C</div>
                    <div class="temp-day bg-warning">Day: ${day.temp.day}&#176;C</div>
                </div>
            </div>
                `

    })

    homeCityRow.innerHTML= Forecast;
}
