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