// ===============================
// COURTKICKS JAVASCRIPT
// ===============================

// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ===============================
// SEARCH FUNCTION
// ===============================

const search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", function () {

        let value = search.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            let text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ===============================
// CONTACT FORM
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Thank you! Your message has been sent.");

        form.reset();

    });

}

// ===============================
// NAVBAR SHADOW
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.4)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ===============================
// SCROLL ANIMATION
// ===============================

const elements = document.querySelectorAll(".card, .about-box, .hero-text, .hero-image");

function reveal() {

    elements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        const visible = window.innerHeight - 100;

        if (top < visible) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

elements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// ===============================
// ACTIVE NAVIGATION
// ===============================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});