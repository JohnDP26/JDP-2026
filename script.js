// ==========================
// ELEMENTS
// ==========================

const reveals = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
const topBtn = document.getElementById("topBtn");
const typing = document.getElementById("typing");

// ==========================
// SCROLL EFFECTS
// ==========================

function handleScroll() {

    // Reveal Sections
    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const visible = 120;

        if (top < window.innerHeight - visible) {
            section.classList.add("active");
        }

    });

    // Active Navigation
    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

    // Back to Top Button
    if (topBtn) {

        if (window.scrollY > 500) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    }

}

window.addEventListener("scroll", handleScroll);
handleScroll();

// ==========================
// BACK TO TOP
// ==========================

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ==========================
// TYPING ANIMATION
// ==========================

const titles = [

    "Business Analyst",
    "ERP Functional Consultant",
    "Process Improvement Specialist",
    "Data Analytics Professional",
    "Digital Transformation Advocate"

];

let titleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    const current = titles[titleIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    if (!deleting && charIndex > current.length) {

        deleting = true;
        setTimeout(typeEffect, 1800);
        return;

    }

    if (deleting && charIndex === 0) {

        deleting = false;
        titleIndex = (titleIndex + 1) % titles.length;

    }

    setTimeout(typeEffect, deleting ? 40 : 80);

}

typeEffect();

// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    menuToggle.textContent =
        navMenu.classList.contains("show") ? "✕" : "☰";

});