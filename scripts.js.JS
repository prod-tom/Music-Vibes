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
});
