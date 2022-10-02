const btnMobile = document.getElementById("btn-mobile");
const btnMenuSections = document.querySelectorAll(".button-section");

function toggleMenu(event) {
    console.log("toggleMenu")
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
  }

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
btnMenuSections.forEach(btn => btn.addEventListener("click", toggleMenu));