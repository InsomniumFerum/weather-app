"use strict";

const searchBox = document.querySelector(".search-box");
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const time = document.querySelector(".time");

let apiKey = "008cba7955ad4790904143aa5e273e3d";
let lat;
let lon;

const getWeather = (e) => {
  console.log(e);
};

const getAJAX = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      const api = `http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=-${lon}&key=${apiKey}&include=minutely`;
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const { city_name, timezone, temp, sunrise, ob_time } = data.data[0];
          
          temp.textContent = Math.floor(temp) + "C";
          cityName.textContent = city_name;
          time.textContent = ob_time;
        });
    });
  }
};
getAJAX();
searchBox.addEventListener("keypress", getWeather);
