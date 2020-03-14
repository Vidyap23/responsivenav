const burger = document.querySelector(".burger");
const navlinkscontainer = document.querySelector(".nav-links-container");
const navlinks = document.querySelectorAll("nav-links-container li");
burger.onclick = () => {
    $navLinkContainer.classList.toggle("nav-click");
    $burger.classList.toggle(".burger-click");
navlinks.forEach((link,index) => {
link.style.animation= "navLinkAnimation 0.5 ease forwards $(index/5 +0.5s);
});
};