window.addEventListener("scroll", function () {
    let header = document.querySelector("#en-tete");

    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
})

let navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        link.classList.add("active");
    });
})