window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("nav-animacao", window.scrollY > 400);
})