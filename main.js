// const api = {
//   key: "fcc8de7015bbb202209bbf0261babf4c",
//   base: "https://api.openweathermap.org/data/2.5/"
// }

// const searchbox = document.querySelector('.search-box');
// searchbox.addEventListener('keypress', setQuery);

// function setQuery(evt) {
//   if (evt.keyCode == 13) {
//     getResults(searchbox.value);
//   }
// }

// function getResults(query) {
//   fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('City not found');
//       }
//       return response.json();
//     })
//     .then(displayResults)
//     .catch(error => {
//       alert(error.message);
//     });
// }

// function displayResults(weather) {
//   let city = document.querySelector('.location .city');
//   city.innerText = `${weather.name}, ${weather.sys.country}`;

//   let now = new Date();
//   let date = document.querySelector('.location .date');
//   date.innerText = dateBuilder(now);

//   let temp = document.querySelector('.current .temp');
//   temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

//   let weather_el = document.querySelector('.current .weather');
//   weather_el.innerText = weather.weather[0].main;

//   let hilow = document.querySelector('.hi-low');
//   hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
// }

// function dateBuilder(d) {
//   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   let day = days[d.getDay()];
//   let date = d.getDate();
//   let month = months[d.getMonth()];
//   let year = d.getFullYear();

//   return `${day} ${date} ${month} ${year}`;
// }


const api = {
  key: "fcc8de7015bbb202209bbf0261babf4c",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(displayResults)
    .catch(error => {
      alert(error.message);
    });
}

function displayResults(weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;

  // Update background image based on weather condition
  updateBackgroundImage(weather.weather[0].main);
}

function updateBackgroundImage(weatherCondition) {
  let backgroundImage;

  switch (weatherCondition.toLowerCase()) {
    case 'clear':
      backgroundImage = 'url(https://st4.depositphotos.com/1005844/30671/i/450/depositphotos_306719508-stock-photo-blue-sky-sun-background.jpg)';
      break;
    case 'Clouds':
      backgroundImage = 'url(https://media.istockphoto.com/id/157527872/photo/storm-cloud.jpg?s=612x612&w=0&k=20&c=wsK-fd2hBm9SGlV_lnKYqFCAS3-_sk-f9GFAUbT6H40=)';
      break;
    case 'rain':
      backgroundImage = 'url(https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg)';
      break;
  
    case 'mist':
      backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dTasTdahWrcFl7JGWJMA_pQhh8gF1QNUmw&s)';
      break;
    case 'storm':
      backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVMuAsFGCdzBvVY3GRPCaX0C5Ps7YgRT_Tg&s)';
      break;
    default:
      backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9SFeCZ3TFriir0JHfKYcFNVF5BnlgfPnYA&s)';
  }

  document.body.style.backgroundImage = backgroundImage;
}

function dateBuilder(d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
