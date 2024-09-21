// Smooth scrolling to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Scroll smoothly to the section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
