const searchBtn=document.getElementById('searchBtn')
const inputbox=document.querySelector('.inputbox')
const weatherImg=document.querySelector('.weatherImg')
const temperature=document.querySelector('.temperature')
const description=document.querySelector('.description')  
const humidity=document.getElementById('humidity')
const wind=document.getElementById('windSpeed')
const location_not_found=document.querySelector('.location-not-found')
const weatherBody = document.querySelector('.weatherBody');

async function checkWheather(city){
const api_key="aaddc2bfe8b778e9514df1314e76b4f5";
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
 const weatherData= await fetch(`${url}`).then(response =>response.json())
console.log(weatherData)
 temperature.innerHTML=`${Math.round(weatherData.main.temp - 273.15)}°C`;
 description.innerHTML=`${weatherData.weather[0].description}`
humidity.innerHTML=`${weatherData.main.humidity}%`
wind.innerHTML=`${weatherData.wind.speed}Km/H`

if(weatherData.cod ===`404`){
    location_not_found.style.display="flex";
    weatherBody.style.display="none";
    return;
}
location_not_found.style.display="none";

weatherBody.style.display="flex";

switch(weatherData.weather[0].main){
    case 'Clouds':
        weatherImg.src="assets/cloud.png"
        break;
    case 'Rain':
        weatherImg.src="assets/Rain.png"
        break;
    case 'Clear':
        weatherImg.src="assets/clear.png"
        break;
    case 'Mist':
        weatherImg.src="assets/mist.png"
        break;
    case 'Snow':
        weatherImg.src="assets/snow.png"
        break;
    case 'Mist':
        weatherImg.src="assets/404.png"
        break;

}
    

}



searchBtn.addEventListener('click' , ()=>{
    checkWheather(inputbox.value);
});