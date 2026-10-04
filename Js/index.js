const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});



// Close Mobile Menu

const links =
    document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navLinks.classList.remove("show");

        }
    );

});


// Scroll Animation

const animatedElements =
    document.querySelectorAll(
        ".class-card, .benefit-card"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(
    function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "0.6s ease";

        observer.observe(element);

    }
);
