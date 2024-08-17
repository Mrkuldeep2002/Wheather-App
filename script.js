// const apiKEY ="e19843b5884ee15b843b7a421730a3fc";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=e19843b5884ee15b843b7a421730a3fc&units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// const weather = document.querySelector(".weather");



searchbox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchbtn.click();
    }
});


searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
  // not usefull because it also shows undefined cities
  // weather.classList.remove("display")
});

async function checkweather(city) {
  const response = await fetch(apiUrl + city);
  // console.log(response);
     
  if (response.status==404) {

    document.querySelector(".error").style.display = "block";
    
  document.querySelector(".display").style.display = "none";

  }else{
    
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";

  weatherIcon.src = "images/" + data.weather[0].main + ".png";

  document.querySelector(".display").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

  }

