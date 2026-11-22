// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", function() {

    navbar.classList.toggle("show");

});


// CLOSE MENU AFTER CLICKING A LINK

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("show");

    });

});


// PROJECT FILTERING

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const category = button.dataset.filter;

        projectCards.forEach(function(card) {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// FAQ ACCORDION

const faqQuestions = document.querySelectorAll(".faq-question");


faqQuestions.forEach(function(question) {

    question.addEventListener("click", function() {

        const faqItem = question.parentElement;

        faqItem.classList.toggle("open");

        const icon = question.querySelector("span");

        if (faqItem.classList.contains("open")) {

            icon.textContent = "−";

        } else {

            icon.textContent = "+";

        }

    });

});


// CONTACT FORM DEMO

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thank you " + name + "! Your message is ready to be connected to a server.";

    contactForm.reset();

});