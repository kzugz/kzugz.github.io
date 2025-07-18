// Dark Mode
const toggleBtn = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const blogImage = document.getElementById('blog1-image');

// Check for saved theme
let savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  document.body.classList.add('dark');
}

function updateBlogImage() {
  if (document.body.classList.contains('dark')) {
    blogImage.src = 'assets/Blog1 Preview 1.png';
  } else {
    blogImage.src = 'assets/Blog1 Preview 2.png';
  }
}

// Toggle theme
function toggleTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  updateBlogImage();
}

toggleBtn.addEventListener('click', toggleTheme);

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