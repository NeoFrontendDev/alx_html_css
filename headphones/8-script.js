const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".navlinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
