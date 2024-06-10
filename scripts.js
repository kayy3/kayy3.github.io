document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("#main-content").classList.remove("hidden");
        document.querySelector("#main-content").classList.add("fade-in");
    }, 3000); // 3 seconds delay

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener("scroll", function() {
    const contentSections = document.querySelectorAll(".content");

    contentSections.forEach(section => {
        const sectionPos = section.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            section.classList.add("fade-in");
        }
    });
});
