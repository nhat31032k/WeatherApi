//chức năng search thành phố
const AppId = "8032aa6285f67c9c933ab93e5d387aab";
const searchCity = document.querySelector('.search-input');
//lấy ra thành phố
const Default = "_ _";
const cityName = document.querySelector('.city-name');
const weatherStatus = document.querySelector('.weather-status');
const weatherImg = document.querySelector('.weather-img');
const temp = document.querySelector('.temperature');
const sunRise = document.querySelector('.sun');
const sunSet = document.querySelector('.moon');
const humidity = document.querySelector('.humid');
const windspeed = document.querySelector('.speed');

searchCity.addEventListener('change', (e) => {
    console.log(e.target);
    //fetch data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${AppId}&units=metric&lang=vi`)
        .then(async res => {
            const data = await res.json();
            console.log(data);
            cityName.innerHTML = data.name || Default;
            weatherStatus.innerHTML = data.weather[0].description || Default;
            weatherImg.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            temp.innerHTML = Math.floor(data.main.temp) || Default;
            sunRise.innerHTML = moment.unix(data.sys.sunrise).format("H:mm") || Default;
            sunSet.innerHTML = moment.unix(data.sys.sunset).format("H:mm") || Default;
            humidity.innerHTML = data.main.humidity || Default;
            windspeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || Default;
        });
})