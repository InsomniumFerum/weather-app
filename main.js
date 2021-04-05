"use strict";

const api = {
  key: "ca79a7143141d606e78f41fdbee76604",
  base: "https://api.openweathermap.org/data/2.5/",
};

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

const getInput = (e) => {
  e.preventDefault();
  if (e.type == "click") {
    getData(search.value);
    console.log(search.value);
  }
};
btn.addEventListener("click", getInput);

const getData = () => {
  fetch(
    `${api.base}weather?q=${search.value}&units=metric&appid=${api.key}&lang=${tr}`
  )
    .then((res) => res.json())
    .then(displayData);
  console.log(res);
};

const displayData = (res) => {
  if (res.cod === "404") {
    const error = document.querySelector(".error");
    error.textContent = "Please enter a valid city";
    search.value = "";
  } else {
    const city = document.querySelector(".city");
    city.innerText = `${res.name}, ${res.sys.country}`;

    const today = new Date();
    const date = document.querySelector(".date");
    date.innerText = dateFunction(today);
  }
};
