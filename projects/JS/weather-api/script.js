const API_KEY = "241275c9ab3542f15e6000ce3073344d";
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;
const query = document.querySelector("#inputCity");
const button = document.querySelector("button");
const cityName = document.querySelector("#city");
const weatherIcon = document.querySelector("#weatherIcon");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const errorMessage = document.querySelector("#errorMessage");

// Function to fetch weather data for a given city
async function getWeather(city) {
    if (city) {
        try {
            // Fetch weather data from the API
            const response = await fetch(URL + city);
            const data = await response.json();
            // Display the fetched weather data
            displayWeather(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }
}

// Function to display the fetched weather data
function displayWeather(weatherData) {
    if (weatherData.cod === 200) {
        // Clear any previous error messages
        errorMessage.textContent = "";
        // Update the UI with the fetched weather data
        cityName.textContent = weatherData.name;
        temperature.textContent = weatherData.main.temp + "°";
        description.textContent = weatherData.weather[0].description;
        weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    } else {
        // Clear the UI and display an error message
        cityName.textContent = "";
        temperature.textContent = "";
        description.textContent = "";
        weatherIcon.src = "";
        errorMessage.textContent = weatherData.message;
    }
}

// Add an event listener to the button to fetch weather data when clicked
button.addEventListener("click", (e) => {
    getWeather(query.value);
});


