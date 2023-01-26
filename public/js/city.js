const timeHome = document.getElementById('time-home');
const dayHome = document.getElementById('day-home');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const containers = document.getElementById('containers');
const currContainer = document.getElementById('curr-container');
const currentTempEl = document.getElementById('current-temp');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


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







// const container= document.getElementById('container');

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const time = new Date();
// const day = time.getDay();

const API_KEY= "c7e52ccc02d5cdacb15b99767de46eec";

// const futureDays= [days[day], ];

// let j=0;

// for(let i=0; i<8; i++){
//     document.querySelectorAll(".day")[i].innerHTML=days[day+j];
//     j++;
// }

getWeatherData()
function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude} = success.coords;

        let url1= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

        console.log(data)
        console.log(url1);
        showWeatherData(data);
        })

    })
}

let i=0;

function showWeatherData (data){
    data.daily.forEach((day) => {
        document.querySelectorAll(".day")[i].innerHTML=window.moment(day.dt*1000).format('ddd');
        i++;
    })
}


// $(".day").text(days.day)


{/* <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQl3CjQxZpl28_5hTbPvBipa6zc1Ez5gCP1eizD9bN6RjY2Om983FccZdeAOQ&s=19" alt="weather icon" class="pop-cities">
<span>Los Angeles</span> */}