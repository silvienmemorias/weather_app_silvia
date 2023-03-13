let now = new Date();
let currentDay=document.querySelector("h3");

let hours=now.getHours();
let minutes=now.getMinutes();

let days=["Sunday", "Monday","Tuesday", "Wednesday", "Thrusday","Friday", "Saturday"];
let Day=days[now.getDay()];

currentDay.innerHTML=`${Day} ${hours}:${minutes}`;


let currentCity=document.getElementById("currentCity");
let currentCities=document.querySelector("h2");
let cityButton=document.getElementById("cityButton");
function clickCity(){
  currentCities.innerHTML=currentCity.value;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let city = currentCity.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  currentCity.value="";
};

let cityTemp=document.getElementById("numberTemp");
function clickcel(){
  temp = Math.round((parseInt(cityTemp.innerHTML.slice(0,2))-32)*5/9);
  cityTemp.innerHTML= `${temp}°C`;
};
function clickfah(){
  temp = Math.round((parseInt(cityTemp.innerHTML.slice(0,2))*9/5)+32);
  cityTemp.innerHTML=`${temp}°F`;
};



function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  cityTemp.innerHTML= `${temperature}°C`;
  console.log(temperature);
  console.log(response);
}



