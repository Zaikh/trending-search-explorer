document.addEventListener("DOMContentLoaded", () => {
const categories = [
  { name: "Tech", image: "assets/img/Tech.jpg" },
  { name: "Sports", image: "assets/img/sports.jpg" },
  { name: "Entertainment", image: "assets/img/entertainment.jpg" },
  { name: "Finance", image: "assets/img/finance.jpg" },
  { name: "AI", image: "assets/img/Ai.jpg" }
];
  const cardsContainer = document.querySelector(".cards-container");

  categories.forEach(cat => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${cat.image}" alt="${cat.name}">
      <div class="card-body">
        <h3>${cat.name}</h3>
        <button onclick="location.href='category.html?type=${cat.name.toLowerCase()}'">Explore</button>
      </div>
    `;
    cardsContainer.appendChild(card);
  });
}); 


document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeCheckbox = document.querySelector(".theme-switch__checkbox"); // ✅ Correct selector
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeCheckbox.checked = true;
  }

  // Theme toggle
  themeCheckbox.addEventListener("change", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
