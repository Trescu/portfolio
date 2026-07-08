// Megfigyeljük a fő tartalmi elemeket
const elements = document.querySelectorAll("section, article, aside");

// Kezdeti állapot
elements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            obs.unobserve(entry.target); // csak egyszer jelenjen meg
        }
    });
}, {
    threshold: 0.15
});

elements.forEach(element => observer.observe(element));