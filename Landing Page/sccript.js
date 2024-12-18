document.addEventListener("DOMContentLoaded", function() {
    // Show the loader
    document.querySelector('.loader').style.display = 'flex';

    // Simulate loading time (e.g., fetching data)
    setTimeout(function() {
        // Hide the loader
        document.querySelector('.loader').style.display = 'none';
        // Show the content
        document.querySelector('.content').style.display = 'block';
    }, 2000); // Adjust time as needed
});