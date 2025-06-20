// Loading Screen Script
window.addEventListener("load", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
  }, 1000); // Loading screen will disappear after 1 second
});
const projectBlocks = document.querySelectorAll(".project-block");
const originalBg = document.body.style.backgroundColor || "#ffffff";

projectBlocks.forEach((block) => {
  const bgColor = block.getAttribute("data-bg");

  block.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = bgColor;
  });

  block.addEventListener("mouseleave", () => {
    document.body.style.backgroundColor = originalBg;
  });
});

// Theme Toggle
const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Checar tema salvo
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀️";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  toggleButton.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Navbar Sumindo
let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Rola pra baixo -> esconde navbar
    navbar.classList.add("hide");
  } else {
    // Rola pra cima -> mostra navbar
    navbar.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});