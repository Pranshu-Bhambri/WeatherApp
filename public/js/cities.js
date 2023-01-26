// const container= document.getElementById('container');

// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// const time = new Date();
// const day = time.getDay();

// const API_KEY= "c7e52ccc02d5cdacb15b99767de46eec";

// // const futureDays= [days[day], ];

// // let j=0;

// // for(let i=0; i<8; i++){
// //     document.querySelectorAll(".day")[i].innerHTML=days[day+j];
// //     j++;
// // }

// for(let i=0; i<8; i++){
//     document.querySelectorAll(".day")[i].innerHTML=days[day+j];
//     j++;
// }

// getWeatherData()
// function getWeatherData () {
//     navigator.geolocation.getCurrentPosition((success) => {
        
//         let {latitude, longitude} = success.coords;

//         let url1= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`;

//         fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

//         console.log(data)
//         console.log(url1);
//         showWeatherData(data);
//         })

//     })
// }

// let i=0;

// function showWeatherData (data){
//     data.daily.forEach((day) => {
//         document.querySelectorAll(".day")[i].innerHTML=window.moment(day.dt*1000).format('ddd');
//         i++;
//     })
// }


// // $(".day").text(days.day)










{/* <div id="cities-containers" class="cities-containers">
    
    <div class="cities-row">

        <form action="/cities" method="post" class="popcity-form">
            <input type="hidden" name="popCity" value="Tokyo">
            <button type="submit">
                <div class="card" style="width: 18rem;">
                    <img src="https://wallpaper.dog/large/10765619.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <span class="card-text">Tokyo</span>
                    </div>
                </div>
                <!-- <div class="cities-container"> -->
                    <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ngOVH5rxaAhDmKy2ROsURbeCzk9mZS_MD8Ko7u1BbQ&s" alt="weather icon" class="pop-cities"> -->
                    <!-- <span>Tokyo</span> -->
                <!-- </div> -->
            </button>
        </form>
        
        <form action="/cities" method="post" class="popcity-form">
            <input type="hidden" name="popCity" value="New York">
            <button type="submit">
                <div class="card" style="width: 18rem;">
                    <img src="https://i.redd.it/6vb3s9ow29o11.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <span class="card-text">New York</span>
                    </div>
                </div>
                <!-- <div class="cities-container"> -->
                    <!-- <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQape_65Pj1OFo-sHB-ph232lUuLE2ennfb-A8dNDk47Mh-OzLSOH2Qkpj21w&s=19" alt="weather icon" class="pop-cities"> -->
                    <!-- <span>New York</span> -->
                <!-- </div> -->
            </button>
        </form>
        
        <form action="/cities" method="post" class="popcity-form">
            <input type="hidden" name="popCity" value="London">
            <button type="submit">
                <div class="card" style="width: 18rem;">
                    <img src="https://images.hdqwalls.com/download/london-lights-4k-ap-2560x1440.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <span class="card-text">London</span>
                    </div>
                </div>
                <!-- <div class="cities-container"> -->
                    <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOdPMYCg07Dp1nFzBlUIVqo-UX5XbDWvgzKiVLaFrFA&s" alt="weather icon" class="pop-cities"> -->
                    <!-- <span>London</span> -->
                <!-- </div> -->
            </button>
        </form>
        
        <form action="/cities" method="post" class="popcity-form">
            <input type="hidden" name="popCity" value="Paris">
            <button type="submit">
                <div class="card" style="width: 18rem;">
                    <img src="https://s1.1zoom.me/b8048/487/Sky_Evening_France_Eiffel_Tower_Paris_From_above_520603_2560x1440.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <span class="card-text">Paris</span>
                    </div>
                </div>
                <!-- <div class="cities-container"> -->
                    <!-- <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTQguxHf0FHSQlAP8sc0KZLgCO77gCe5Wy6UT1qDpssBKcsFzu8fSiEGXlWew&s=19" alt="weather icon" class="pop-cities"> -->
                    <!-- <span>Paris</span> -->
                <!-- </div> -->
            </button>
        </form>
         
    </div>
    <div class="cities-row">

        <form action="/cities" method="post" class="popcity-form">
            <input type="hidden" name="popCity" value="Sydney">
            <button type="submit">
                <div class="card" style="width: 18rem;">
                    <img src="https://wallpaperaccess.com/full/1564424.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <span class="card-text">Sydney</span>
                    </div>
                </div>
                <!-- <div class="cities-container"> -->
                    <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIvFqSr05SPrvHuRjHKFGFm_GwXMCrBHZdw&usqp=CAU" alt="weather icon" class="pop-cities"> -->
                    <!-- <span>Delhi</span> -->
                <!-- </div> -->
            </button>
        </form>
        
        <form action="/cities" method="post" class="popcity-form">
            <input type="hidden" name="popCity" value="Los Angeles">
            <button type="submit">
                <div class="card" style="width: 18rem;">
                    <img src="https://data.1freewallpapers.com/download/city-palm-trees-sunset-buildings-skyscrapers-los-angeles-2560x1440.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <span class="card-text">Los Angeles</span>
                    </div>
                </div>
                <!-- <div class="cities-container"> -->
                    <!-- <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQl3CjQxZpl28_5hTbPvBipa6zc1Ez5gCP1eizD9bN6RjY2Om983FccZdeAOQ&s=19" alt="weather icon" class="pop-cities"> -->
                    <!-- <span>Los Angeles</span> -->
                <!-- </div> -->
            </button>
        </form>
        
        <form action="/cities" method="post" class="popcity-form">
            <input type="hidden" name="popCity" value="Mumbai">
            <button type="submit">
                <div class="card" style="width: 18rem;">
                    <img src="https://www.teahub.io/photos/full/285-2859026_mumbai-mumbai-city.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <span class="card-text">Mumbai</span>
                    </div>
                </div>
                <!-- <div class="cities-container"> -->
                    <!-- <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRunrWW-DuMs5rBtYuNNyvE_bNV8mdnOZF-9knJHAc55Jx-HZV8TXyCTV96Ig&s=19" alt="weather icon" class="pop-cities"> -->
                    <!-- <span>Mumbai</span> -->
                <!-- </div> -->
            </button>
        </form>
        
        <form action="/cities" method="post" class="popcity-form">
            <input type="hidden" name="popCity" value="Dubai">
            <button type="submit">
                <div class="card" style="width: 18rem;">
                    <img src="https://s1.1zoom.me/b5050/839/Dubai_Emirates_UAE_Houses_Skyscrapers_Roads_Night_544241_2560x1440.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <span class="card-text">Dubai</span>
                    </div>
                </div>
                <!-- <div class="cities-container"> -->
                    <!-- <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQIRPRFKgLZrmEeaNdKm0TBH-iI95bNJaSJg3VhzgWdkcpv4gJ115SB6tX7Tw&s=19" alt="weather icon" class="pop-cities"> -->
                    <!-- <span>Dubai</span> -->
                <!-- </div> -->
            </button>
        </form>
           
    </div>
    <div class="cities-row">

        <form action="/cities" method="post" class="popcity-form">
            <input type="hidden" name="popCity" value="Venice">
            <button type="submit">
                <div class="card" style="width: 18rem;">
                    <img src="https://img1.goodfon.com/original/2560x1440/0/df/venice-italy-grand-canal.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <span class="card-text">Venice</span>
                    </div>
                </div>
                <!-- <div class="cities-container"> -->
                    <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSit46JhvrhX0J7_IyQTiCjsOyAcTen2taSoJmhIh4t_Q&s" alt="weather icon" class="pop-cities"> -->
                    <!-- <span>Mexico City</span> -->
                <!-- </div> -->
            </button>
        </form>
        
        <form action="/cities" method="post" class="popcity-form">
            <input type="hidden" name="popCity" value="Osaka">
            <button type="submit">
                <div class="card" style="width: 18rem;">
                    <img src="https://s1.1zoom.me/b5546/278/Japan_Houses_Rivers_Bridges_Evening_Marinas_Osaka_540877_2560x1440.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <span class="card-text">Osaka</span>
                    </div>
                </div>
                <!-- <div class="cities-container"> -->
                    <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISpgEUDeVVpTmizU9PdlUkxvCJM_Mj5Z9tBxHiXXIWA&s" alt="weather icon" class="pop-cities"> -->
                    <!-- <span>Osaka</span>  -->
                <!-- </div> -->
            </button>
        </form>
        
        <form action="/cities" method="post" class="popcity-form">
            <input type="hidden" name="popCity" value="Seoul">
            <button type="submit">
                <div class="card" style="width: 18rem;">
                    <img src="https://images5.alphacoders.com/647/647349.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <span class="card-text">Seoul</span>
                    </div>
                </div>
                <!-- <div class="cities-container"> -->
                    <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62lgrYKfA0N4et6s9VAY3W2Up6vOFz_Pbu0Ai6RNV&s" alt="weather icon" class="pop-cities"> -->
                    <!-- <span>Seoul</span> -->
                <!-- </div> -->
            </button>
        </form>
        
        <form action="/cities" method="post" class="popcity-form">
            <input type="hidden" name="popCity" value="Frankfurt">
            <button type="submit">
                <div class="card" style="width: 18rem;">
                    <img src="https://s1.1zoom.me/b5361/981/Bridges_Rivers_Houses_Germany_Frankfurt_Evening_534232_2560x1440.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <span class="card-text">Frankfurt</span>
                    </div>
                </div>
                <!-- <div class="cities-container"> -->
                    <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbe7_5Xqpr6csY9mBhe4sV8RpSzBmqSoqkQ5hGc-ljg&s" alt="weather icon" class="pop-cities"> -->
                    <!-- <span>Kuala Lumpur</span>  -->
                <!-- </div> -->
            </button>
        </form>
        
    </div>
    
</div> */}
