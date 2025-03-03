document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        navbar.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !navbar.contains(event.target)) {
            navbar.classList.remove('active');
        }
    });
});

function toggleProcedure(button) {
    let flowchart = button.nextElementSibling;
    if (flowchart.classList.contains("show")) {
        flowchart.classList.remove("show");
        flowchart.classList.add("hide");
        
        setTimeout(() => {
            flowchart.style.display = "none";
            flowchart.classList.remove("hide");
        }, 500); // Wait for animation to complete
    } else {
        flowchart.style.display = "flex";
        flowchart.classList.remove("hide");
        flowchart.classList.add("show");
    }
}

// Handle hash navigation
let lastScrollTop = 0;
function handleScroll() {
    const courses = document.querySelectorAll(".courseContent");
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const screenHeight = window.innerHeight;

    courses.forEach((course, index) => {
        const coursePosition = course.getBoundingClientRect().top;

        if (st > lastScrollTop) {
            // Scrolling down
            if (coursePosition < screenHeight * 0.80) {
                course.classList.add("show");
                course.classList.remove("hide");
            }
        } else {
            // Scrolling up
            if (coursePosition > screenHeight * 0.75) {
                course.classList.add("hide");
                course.classList.remove("show");
            }
        }
    });

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}

window.addEventListener("scroll", handleScroll);