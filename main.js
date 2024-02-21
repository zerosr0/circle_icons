const nav = document.querySelector("nav");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => nav.classList.toggle("open"));