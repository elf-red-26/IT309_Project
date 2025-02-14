// Function to load content dynamically and handle hash navigation
function loadPage(page, hash = null) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;

            // Scroll to the section if hash is provided
            if (hash) {
                setTimeout(() => {
                    const section = document.querySelector(hash);
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100); // Delay ensures content is loaded before scrolling
            }
        })
        .catch(error => console.error("Error loading page:", error));
}

// Load the default page (home.html) when the site loads
document.addEventListener("DOMContentLoaded", () => {
    loadPage("./home_page.html");
});
