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