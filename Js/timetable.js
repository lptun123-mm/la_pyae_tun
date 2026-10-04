const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});

    //Fliter classes

    const buttons =
        document.querySelectorAll(".filter-btn");

    const classes =
        document.querySelectorAll(".class");


    buttons.forEach(button => {

        button.addEventListener("click", () => {

            //Remove active class

            buttons.forEach(btn => {
                btn.classList.remove("active");
            });

            // Add active class

            button.classList.add("active");


            const filter =
                button.getAttribute("data-filter");


            classes.forEach(item => {

                const type =
                    item.getAttribute("data-type");


                if (
                    filter === "all" ||
                    type === filter
                ) {

                    item.style.opacity = "1";
                    item.style.transform = "scale(1)";

                } else {

                    item.style.opacity = "0.12";
                    item.style.transform = "scale(0.96)";

                }

            });

        });

    });

    //Higlignt Today

    const today =
        new Date().getDay();

    /*
        JavaScript:
        Sunday = 0
        Monday = 1
        Tuesday = 2
        ...
        Saturday = 6

        Table:
        Time = column 0
        Monday = column 1
        Tuesday = column 2
        ...
        Sunday = column 7
    */

    const headers =
        document.querySelectorAll("thead th");


    if (headers[today + 1]) {

        headers[today + 1]
            .classList.add("today");

    }

    // class click

    classes.forEach(item => {

        item.addEventListener("click", () => {

            const name =
                item.querySelector(
                    ".class-name"
                ).textContent.trim();

            alert(
                "Selected class: " +
                name +
                "\n\nPlease contact DoBu Martial Arts " +
                "to book this class."
            );

        });

    });
