const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});

// Show / hide password

const password = document.getElementById("password");

const confirmPassword =
    document.getElementById("confirmPassword");


const togglePassword =
    document.getElementById("togglePassword");

const toggleConfirmPassword =
    document.getElementById("toggleConfirmPassword");


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


toggleConfirmPassword.addEventListener(
    "click",
    function () {

        if (confirmPassword.type === "password") {

            confirmPassword.type = "text";

            toggleConfirmPassword.textContent = "Hide";

        } else {

            confirmPassword.type = "password";

            toggleConfirmPassword.textContent = "Show";

        }

    }
);

// form valicaton

const signupForm =
    document.getElementById("signupForm");

const message =
    document.getElementById("message");


signupForm.addEventListener(
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


        const passwordValue =
            password.value;


        const confirmPasswordValue =
            confirmPassword.value;


        /* EMAIL VALIDATION */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !firstName ||
            !lastName ||
            !email 
            
        ) {

            showMessage(
                "Please complete all required fields.",
                "error"
            );

            return;

        }


        if (
            !emailPattern.test(email)
        ) {

            showMessage(
                "Please enter a valid email address.",
                "error"
            );

            return;

        }


        /* PASSWORD LENGTH */

        if (
            passwordValue.length < 8
        ) {

            showMessage(
                "Password must contain at least 8 characters.",
                "error"
            );

            return;

        }


        /* PASSWORD MATCH */

        if (
            passwordValue !==
            confirmPasswordValue
        ) {

            showMessage(
                "Passwords do not match.",
                "error"
            );

            return;

        }


        /* SUCCESS */

        showMessage(
            "Account created successfully!",
            "success"
        );


        /* Reset form */

        signupForm.reset();

    }
);

//MESSAGE FUNCTION

function showMessage(
    text,
    type
) {

    message.textContent = text;

    message.className = type;

}

 