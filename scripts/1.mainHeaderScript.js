// HAMBURGER

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll("navLinks").forEach((n) =>
  n.addEventListener("click", () => {
    n.hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
