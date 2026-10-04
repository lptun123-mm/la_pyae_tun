const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});



// Contact Form

const contactForm =
    document.getElementById("contactForm");

const message =
    document.getElementById("message");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const firstName =
            document
                .getElementById("firstName")
                .value
                .trim();


        const lastName =
            document
                .getElementById("lastName")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();



        const userMessage =
            document
                .getElementById("userMessage")
                .value
                .trim();


        /* EMAIL VALIDATION */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        /* CHECK EMPTY FIELDS */

        if (

            !firstName ||
            !lastName ||
            !email ||
            !userMessage

        ) {

            showMessage(
                "Please complete all fields.",
                "error"
            );

            return;

        }


        /* CHECK EMAIL */

        if (

            !emailPattern.test(email)

        ) {

            showMessage(
                "Please enter a valid email address.",
                "error"
            );

            return;

        }


        /* SUCCESS */

        showMessage(
            "Thank you! Your message has been sent successfully.",
            "success"
        );


        /* RESET FORM */

        contactForm.reset();

    }
);


//SHOW MESSAGE

function showMessage(
    text,
    type
) {

    message.textContent = text;

    message.className = type;

}
