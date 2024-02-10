const temperatureDiv = document.querySelector(".temperature");
const formSearch = document.querySelector("#weatherForm");


formSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  //Correção para pegar o input de forma mais fácil utilizando o form
  const cityName = e.target[0].value;
  getWeather(cityName);
});

//usando a correção
async function getWeather(city) {

  const appKey = "cc15b86641ceefed4f4b037128019183";
  const units = 'metric'
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},BR&appid=${appKey}&units=${units}`
  );
  weatherData = await weatherResponse.json();

  showWeather(weatherData);
}

function showWeather(weatherData){

  let dataDescriptionText;
  let dataItem = document.querySelector(".data");

  if (dataItem != null) {
    while (dataItem.hasChildNodes()) {
      dataItem.removeChild(dataItem.firstChild);
    }
  } else {
    dataItem = document.createElement("div");
    dataItem.classList.add("data");
  }

  const cityItem = document.createElement("h2");
  cityItem.innerText = weatherData.name;

  const dataDescription = weatherData.weather[0].main;

  const dataTemp = weatherData.main.temp;
  

  const iconItem = document.createElement("p");

  if (dataDescription == "Clear") {

    iconItem.innerHTML = '<i class="fa-regular fa-sun"></i>';
    iconItem.classList.add("yellow");
    dataDescriptionText = "Céu Limpo";

  } else if (dataDescription == "Clouds") {

    iconItem.innerHTML = '<i class="fa-solid fa-cloud"></i>';
    iconItem.classList.add("gray");
    dataDescriptionText = "Nublado";

  } else if (dataDescription == "Drizzle" || dataDescription == "Rain") {

    iconItem.innerHTML = '<i class="fa-solid fa-cloud-showers-heavy"></i>';
    iconItem.classList.add("gray");
    dataDescriptionText = "Chuva";

  } else {
    iconItem.innerHTML = "";
    dataDescriptionText = "";
  }

  const descriptionItem = document.createElement("p");
  descriptionItem.innerText = dataDescriptionText;

  const tempItem = document.createElement("p");
  tempItem.innerText = `Temperatura: ${dataTemp.toFixed(1)}°C`;

  temperatureDiv.appendChild(dataItem);
  dataItem.appendChild(cityItem);
  dataItem.appendChild(iconItem);
  dataItem.appendChild(descriptionItem);
  dataItem.appendChild(tempItem);
}


/* MINHA FUNÇÃO
async function getWeather(city) {

  let dataDescriptionText;
  const appKey = "cc15b86641ceefed4f4b037128019183";
  
  //Como eu fiz para pegar o input -> const cityName = document.querySelector(".city input").value;

  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},BR&appid=${appKey}`
  );
  data = await weatherResponse.json();

  let dataItem = document.querySelector(".data");

  if (dataItem != null) {
    while (dataItem.hasChildNodes()) {
      dataItem.removeChild(dataItem.firstChild);
    }
  } else {
    dataItem = document.createElement("div");
    dataItem.classList.add("data");
  }

  const cityItem = document.createElement("h2");
  cityItem.innerText = city;

  const dataDescription = await data.weather[0].main;

  const dataTempK = await data.main.temp;
  const dataTempC = dataTempK - 273.15;

  const iconItem = document.createElement("p");

  if (dataDescription == "Clear") {

    iconItem.innerHTML = '<i class="fa-regular fa-sun"></i>';
    iconItem.classList.add("yellow");
    dataDescriptionText = "Céu Limpo";

  } else if (dataDescription == "Clouds") {

    iconItem.innerHTML = '<i class="fa-solid fa-cloud"></i>';
    iconItem.classList.add("gray");
    dataDescriptionText = "Nublado";

  } else if (dataDescription == "Drizzle" || dataDescription == "Rain") {

    iconItem.innerHTML = '<i class="fa-solid fa-cloud-showers-heavy"></i>';
    iconItem.classList.add("gray");
    dataDescriptionText = "Chuva";

  } else {
    iconItem.innerHTML = "";
    dataDescriptionText = "";
  }

  const descriptionItem = document.createElement("p");
  descriptionItem.innerText = dataDescriptionText;

  const tempItem = document.createElement("p");
  tempItem.innerText = `Temperatura: ${dataTempC.toFixed(1)}°C`;

  temperatureDiv.appendChild(dataItem);
  dataItem.appendChild(cityItem);
  dataItem.appendChild(iconItem);
  dataItem.appendChild(descriptionItem);
  dataItem.appendChild(tempItem);
}
*/
