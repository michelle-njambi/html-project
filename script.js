// Toggle Navigation Menu on Small Screens
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector("#nav-toggle");
    const navMenu = document.querySelector("nav ul");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    // Scroll to Top Button
    const scrollBtn = document.querySelector("#scrollTopBtn");
    if (scrollBtn) {
        window.onscroll = () => {
            scrollBtn.style.display = (window.scrollY > 200) ? "block" : "none";
        };

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Simple Form Validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            const name = form.querySelector("#name");
            const email = form.querySelector("#email");
            const message = form.querySelector("#message");

            if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
                e.preventDefault();
                alert("Please fill out all fields before submitting.");
            }
        });
    }
});
