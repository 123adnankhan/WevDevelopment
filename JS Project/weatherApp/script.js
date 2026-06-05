const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfocontainer = document.querySelector(".user-info-container");
// initially variables need 
let currentTab = userTab ;
const API_KEY= "168771779c71f3d64106d8a88376808a";
currentTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab=clickedTab;
        currentTab.classList.add("current-tab");
        if(!searchForm.classList.contains("active")){
            // kya search form wala container is invisible 
            userInfocontainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        } else{
            // main pehle search wale tab par the ab your weather tab visible karna hoga 
            searchForm.classList.remove("active");
            userInfocontainer.classList.remove("active");

            // ab main your weather me aa gaya hu , toh weather bhi display karna padega , so let's check local storage first 
            // for coordinates , if we have saved them there
            getfromSessionStorage();
        }
    }
}
// ek kaam orpending hai 
userTab.addEventListener("click",()=>{
    // pass clicked tab as input parameter
    switchTab(userTab);
});

searchTab.addEventListener("click" , ()=>{
    // pass clicked tab as input parameter
    switchTab(searchTab);
});
// check if coordinate are present in session storage 
function getfromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        // agar local coordinate nahi mile , grant acess location wale container ko visible kara do  
        grantAccessContainer.classList.add("active");
    } else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}
async function fetchUserWeatherInfo(coordinates){
    const {lat,lon}=coordinates;
    // make grant access container invisible
    grantAccessContainer.classList.remove("active");
    // make loader visible 
    loadingScreen.classList.add("active");

    // API Call metric
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=`);
        const data =await response.json();

        loadingScreen.classList.remove("active");
        userInfocontainer.classList.add("active");
        renderWeatherInfo(data);
    } 
    catch(err){
        // homework
        loadingScreen.classList.remove("active");
    }
}
function renderWeatherInfo(weatherInfo){
    // firstly we have to fetch the elements 
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windSpeed = document.querySelector("[data-windSpeed]");
    const humidity = document.querySelector("[ data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    // fetch values from weather info object 
    cityName.innerText = weatherInfo?.name ;
    countryIcon.src=`https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description ;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C` ;
    windSpeed.innerText = `${weatherInfo?.wind?.speed} m/s`  ;
    humidity.innerText = `${weatherInfo?.main?.humidity} %`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;

}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else{
        // show an alert for no -geolocation available 
    }
}
function showPosition(position){
    const userCoordinates ={
        lat:position.coords.latitude , 
        lon:position.coords.longitude ,
    }
    sessionStorage.setItem("user-coordinates" , JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}
const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click" , getLocation);

const searchInput = document.querySelector("[data-searchInput]");
searchForm.addEventListener("submit" , (e)=>{
    e.preventDefault();

    let cityName = searchInput.value ;

    if(cityName === "")
        return ;
    else {
        fetchSearchWeatherInfo(cityName);
    }
});
async function fetchSearchWeatherInfo(city){
    loadingScreen.classList.add("active");
    userInfocontainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");


    try{
        const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfocontainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err){
        // Home Work
    }
}
