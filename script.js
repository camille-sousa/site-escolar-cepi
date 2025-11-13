// === MENU RESPONSIVO ===
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// === ANIMAÇÃO DE SCROLL ===
const caixas = document.querySelectorAll(".animar");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visivel");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

caixas.forEach(caixa => observer.observe(caixa));


