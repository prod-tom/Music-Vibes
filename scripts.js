// Function to fetch weather data from OpenWeatherMap API
api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={310c727ea37f09d90c41d21a822d200c}

// Handle form submission (if any) and fetch weather for the event location
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

    // Fetch weather for the event location (using the event location)
    const eventLocation = document.getElementById('event-location').value.trim();
    if (eventLocation) {
        getWeather(eventLocation); // Call the getWeather function with the entered location
    }
});

// Example: Get weather for a specific city (e.g., New York) when the page loads
window.onload = function() {
    getWeather('New York'); 
};
