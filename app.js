document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("trending-list");
  list.innerHTML = `
    <li>🚀 GitHub Copilot is trending</li>
    <li>📱 iPhone 16 launch rumors</li>
    <li>🎬 New Netflix show release</li>
  `;
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
