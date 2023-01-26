const express = require("express");
const http= require("http");
const https= require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const { off } = require("process");

const app = express();

const favicon= require("serve-favicon");
const path= require("path");

app.use (favicon(path.join(__dirname, "public/images", "weather-app.png")));

// app.use(express.static(__dirname + '/public'));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let searchedCity;

let currWeatherDay= [], weatherDays= [];

function func(res1, query){

    const apiKey= "c7e52ccc02d5cdacb15b99767de46eec";

    const unit= "metric";

    let latitude, longitude, currentCity, currentState, currentCountry;
    
    console.log(latitude, longitude);

    const geoUrl= `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${apiKey}`;

    // res.redirect(`cities/${query}`);

    http.get(geoUrl, function(response){
        console.log(response.statusCode);
        console.log(geoUrl);

        var data;
        response.on("data", function(chunk) {
            if (!data) {
                data = chunk;
            } 
            else {
                data += chunk;
            }
        });

        response.on("end", function() {
            const geoData=JSON.parse(data);
            function func2(){
                return new Promise(function (resolve, reject) {
                    if(!geoData[0].lat && !geoData[0].lon){
                        reject();
                    }
                    else {
                        resolve();
                    }
                })
            }
            func2().then(function(){
                const lat= geoData[0].lat;
                const lon= geoData[0].lon;
                // let lat;
                // let lon;
                // lat= geoData[0].lat;
                // lon= geoData[0].lon;
                // console.log(geoData);
                // console.log(lat);
                // console.log(lon);
                latitude= lat;
                longitude= lon;
                currentCity= geoData[0].name; 
                currentState= geoData[0].state; 
                currentCountry= geoData[0].country;
    
                function func1() {
                    return new Promise(function (resolve, reject) {
                        if(latitude=== undefined && longitude=== undefined){
                            reject();
                        }
                        else {
                            resolve();
                        }
                    })
                }
    
                func1().then(function(){
    
                    const url1= `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
    
                    const url2= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unit}&exclude=hourly,minutely&appid=${apiKey}`;
    
                    https.get(url1, function(response){
                        console.log(response.statusCode);
    
                        console.log(url1);
    
                        // res.redirect("/city");
    
                        response.on("data", function(data){
                            const currWeatherData= JSON.parse(data);
                            // console.log(currWeatherData);
    
                            // res.redirect("/city");
    
                            currWeatherDay= [];
                                
                            const currWeatherDataItems= {
                                icon: currWeatherData.weather[0].icon,
                                currTemp: currWeatherData.main.temp,
                                currPressure: currWeatherData.main.pressure,
                                currHumidity: currWeatherData.main.humidity,
                                currWind: currWeatherData.wind.speed,
                                currCity: currentCity,
                                currState: currentState,
                                currCountry: currentCountry,
                                currDescription: currWeatherData.weather[0].description
                            };
    
                            currWeatherDay.push(currWeatherDataItems);
    
                            // console.log(currWeatherDay);
    
                            // res.render("city");
    
                            // res.redirect("/city");
    
                            // res.redirect("/cities");
    
                            // res.redirect(`/cities/${query}`);
    
                        })
                    })
    
                    https.get(url2, function(response){
                        console.log(response.statusCode);
    
                        console.log(url2);
    
                        // res.redirect("/city");
    
                        response.on("data", function(data){
                            const weatherData= JSON.parse(data);
                            // console.log(weatherData);
    
                            // res.redirect("/city");
    
                            weatherDays= [];
    
                            weatherData.daily.forEach((day) => {
                                // console.log(day.weather[0].main);
                                // FoundDay= day.dt*1000;
                                // FoundDay= global.windowVar.moment(day.dt*1000).format('ddd');
                                
                                const weatherDay= {
                                    icon: day.weather[0].icon,
                                    night: day.temp.night,
                                    day: day.temp.day
                                };
    
                                weatherDays.push(weatherDay);
    
                            });
    
                            // console.log(weatherDays);
    
                            // res.render("city");
    
                            // res1.redirect(`/${query}`);
    
                            // res.redirect("/city");
    
                            // res.redirect("/cities");
    
                            if(searchedCity!==undefined){
                                // console.log("redirected");
                                res1.redirect(`/cities/${query}`);
                            }
                            else{
                                res1.render("city",{
                                    weatherDays: weatherDays,
                                    currWeatherDay: currWeatherDay
                                });
                            }
    
                            // res1.redirect(`/cities/${query}`);
    
                        })
                    })
                }).catch(function(){
                    console.log("Something Unexpexted Happened !")
                })
            }).catch(function(){
                res1.redirect("/notfound");
            })
        });
    })
}

app.get("/", function(req, res){
    res.render("home");
});

app.post("/", function(req, res){

    const res1= res;

    // console.log(res1);

    let query= req.body.cityName;
    searchedCity= query;
    // console.log(searchedCity);
    // const apiKey= "c7e52ccc02d5cdacb15b99767de46eec";
    let latitude, longitude, currentCity, currentState, currentCountry;
    
    console.log(query);
    console.log(latitude, longitude);
    // const unit= "metric";

    func(res1, query);

});

app.post("/cities", function(req, res){
    const res1= res;

    const query= req.body.popCity;
    searchedCity= query;
    // console.log(searchedCity);
    const apiKey= "c7e52ccc02d5cdacb15b99767de46eec";
    let latitude, longitude, currentCity, currentState, currentCountry;
    
    console.log(latitude, longitude);
    const unit= "metric";

    func(res1, query, apiKey, unit);
})

app.get("/cities", function(req, res){
    // const requestedCity= _.lowerCase(req.params.city);
    // const storedCity= query;

    res.render("cities",{
        weatherDays: weatherDays
    });

});

// app.get("/:cities", function(req, res){
//     let impSearch= req.params.cities;
//     if(impSearch==="cities"){
//         // console.log("404");
//         res.render("cities",{
//             weatherDays: weatherDays
//         });
//     }
//     else{
//         console.log("404");
//         res.redirect("/404");
//     }
//     // const requestedCity= _.lowerCase(req.params.city);
//     // const storedCity= query;

//     // res.render("cities",{
//     //     weatherDays: weatherDays
//     // });

// });

app.get("/cities/:city", function(req, res){

    if(searchedCity=== undefined){
        // console.log("if");
        let cityParams= req.params.city;
        console.log(cityParams);
        // console.log("to be posted...");

        const response1= res;
        func(response1, cityParams);

        // app.post("/", function(request, response){
        //     console.log("posting...");
        //     const response1= response;
        //     func(response1, req.params.city);
        // })

    }
    else{
        const cityForSearch= req.params.city;
        // console.log("else");
        console.log(cityForSearch);
        res.render("city",{
            weatherDays: weatherDays,
            currWeatherDay: currWeatherDay
        });
        searchedCity= undefined;
    }

});

app.get("/notfound", function(req, res){
    res.render("notfound");
})

app.get("/help", function(req, res){
    res.render("help");
})

app.get('*', function(req, res){
    res.render("404");
    // res.status(404).send('what???');
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
});
