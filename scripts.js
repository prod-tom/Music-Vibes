// Handle form submission
document.getElementById('event-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const event = document.getElementById('event').value.trim();

    if (!name || !email || !event) {
        alert('Please fill out all required fields.');
        return;
    }

    // Show a confirmation message
    document.getElementById('confirmation-message').style.display = 'block';

    // Optionally, reset the form
    document.getElementById('event-form').reset();

    // Fetch weather for the event location
    const eventLocation = document.getElementById('event-location').value.trim();
    if (eventLocation) {
        getWeather(eventLocation);
    }
});

// Function to fetch weather data from OpenWeatherMap API
function getWeather(city) {
    const apiKey = 'd7bbc53df1d48ffd5bf7dbb955b50b12';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Display the weather data on the page
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const weatherContainer = document.getElementById('weather-info');

            weatherContainer.innerHTML = `
                <p>Weather in ${city}: ${weatherDescription}</p>
                <p>Temperature: ${temperature}°C</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-info').innerHTML = `<p>Could not fetch weather data for ${city}.</p>`;
        });
}
