const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});

// Plan button message

const planButtons =
    document.querySelectorAll(".plan-btn");


planButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                console.log(
                    "Membership plan selected"
                );

            }
        );

    }
);

