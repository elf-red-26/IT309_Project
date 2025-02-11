function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };
    const formattedDateTime = now.toLocaleString('en-US', options);
    dateTimeElement.textContent = formattedDateTime;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately on page load
updateDateTime();

document.addEventListener("DOMContentLoaded", function() {
    const topButton = document.querySelector(".top-button");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    topButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});