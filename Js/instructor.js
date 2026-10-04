const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});

    // Card Scroll Animation

    const cards =
        document.querySelectorAll(".instructor-card");


    function showCards() {

        cards.forEach((card, index) => {

            const position =
                card.getBoundingClientRect().top;

            if (position <
                window.innerHeight - 80) {

                setTimeout(() => {

                    card.classList.add("show");

                }, index * 100);

            }

        });

    }


    window.addEventListener(
        "scroll",
        showCards
    );

    showCards();

    //PROFILE MODAL

    const modal =
        document.getElementById(
            "profileModal"
        );

    const modalName =
        document.getElementById(
            "modalName"
        );

    const modalRole =
        document.getElementById(
            "modalRole"
        );

    const modalDescription =
        document.getElementById(
            "modalDescription"
        );


    function openModal(
        name,
        role,
        description
    ) {

        modalName.textContent =
            name;

        modalRole.textContent =
            role;

        modalDescription.textContent =
            description;

        modal.classList.add(
            "active"
        );

        document.body.style.overflow =
            "hidden";

    }


    function closeModal() {

        modal.classList.remove(
            "active"
        );

        document.body.style.overflow =
            "";

    }


    /* Close when clicking outside */

    modal.addEventListener(
        "click",
        function(event) {

            if (
                event.target === modal
            ) {

                closeModal();

            }

        }
    );


    /* Close with Escape */

    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Escape"
            ) {

                closeModal();

            }

        }
    );
