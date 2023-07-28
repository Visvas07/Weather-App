var weatherApiKey = "071db12c856f8cb805cd6c2fa9065868";
let weather = {
    apiKey : weatherApiKey,
    getWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+weatherApiKey+"&units=metric")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon,description} = data.weather[0];
        const {temp,humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML = "Weather in "+name;
        document.querySelector(".temp").innerHTML = temp+"°C";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = "Humidity: "+humidity+"%";
        document.querySelector(".wind").innerHTML = "Wind Speed: "+speed+" km/hr";
        document.querySelector(".cond").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".weather").classList.remove("loading");
        image.getBackgroundImage(data.name);

    },
    search: function(){
        this.getWeather(document.querySelector(".search-bar").value);
    }
};  

var imageApiKey = "NrMY_gBRFnULYvfIryKp7UXZZ_NG9iy1f9df0UTtnco"; 
let image={
    getBackgroundImage: function(city){
        fetch("https://api.unsplash.com/search/photos/?client_id="+imageApiKey+"&query="+city,{
            method:"GET",   
            headers:{
                'Authorization':imageApiKey
            }
        }).then((response) => response.json()).then((data)=>this.displayBackgroundImage(data)).catch((error)=> console.log(error));
    },
    displayBackgroundImage(data){
        let imgUrl = data.results[0].urls.regular
        document.body.style.backgroundImage = `url(${imgUrl})`;
        
    }
}

document.querySelector(".search-button").addEventListener("click",function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event) {
    if (event.key == "Enter"){
        weather.search();
    }
});









//°C NrMY_gBRFnULYvfIryKp7UXZZ_NG9iy1f9df0UTtnco -- unsplash API