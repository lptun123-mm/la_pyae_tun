const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});

//Password show/ hide

const password =
    document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");


togglePassword.addEventListener(
    "click",
    function () {

        if (password.type === "password") {

            password.type = "text";

            togglePassword.textContent = "Hide";

        } else {

            password.type = "password";

            togglePassword.textContent = "Show";

        }

    }
);


//Sign in validation

const signinForm =
    document.getElementById("signinForm");

const email =
    document.getElementById("email");

const message =
    document.getElementById("message");


signinForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const emailValue =
            email.value.trim();

        const passwordValue =
            password.value.trim();


        /* Clear old message */

        message.className = "";

        message.textContent = "";


        /* EMAIL VALIDATION */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(emailValue)) {

            showMessage(
                "Please enter a valid email address.",
                "error"
            );

            return;

        }


        /* PASSWORD VALIDATION */

        if (passwordValue.length < 8) {

            showMessage(
                "Password must contain at least 8 characters.",
                "error"
            );

            return;

        }


        /* SUCCESS */

        showMessage(
            "Sign in successful!",
            "success"
        );


        /* Example:
           In a real website, this is where
           you connect the form to a database
           or backend.
        */

    }
);

//Show message function

function showMessage(
    text,
    type
) {

    message.textContent = text;

    message.className = type;

}