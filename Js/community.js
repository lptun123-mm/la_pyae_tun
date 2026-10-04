const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});


// COMMUNITY POST FORM

const communityForm =
    document.getElementById("communityForm");

const postsContainer =
    document.getElementById("postsContainer");

const formMessage =
    document.getElementById("formMessage");


communityForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const topic =
        document.getElementById("topic").value;

    const message =
        document.getElementById("message").value;


    const firstLetter =
        name.charAt(0).toUpperCase();


    const newPost =
        document.createElement("article");


    newPost.className =
        "post-card";


    newPost.innerHTML = `

        <div class="post-header">

            <div class="profile">

                ${firstLetter}

            </div>

            <div>

                <h3>${name}</h3>

                <span>${topic}</span>

            </div>

        </div>

        <p>${message}</p>

        <button class="like-btn">

            ♥ Like

        </button>

    `;


    postsContainer.prepend(newPost);


    formMessage.textContent =
        "Your post has been added successfully!";


    communityForm.reset();

});
