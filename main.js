
// quick menu 
const nav = document.querySelector(".quick-menu__nav");
const toggle_btn = document.getElementById("toggle-btn");

toggle_btn.addEventListener("click", () => nav.classList.toggle("open"));
nav.addEventListener("mousedown", () => {
  nav.addEventListener("mousemove", onDrag);
});

function onDrag({ movementY }) {
  const nav_style = window.getComputedStyle(nav);
  const nav_top = parseInt(nav_style.top);
  const nav_height = parseInt(nav_style.height);
  const window_height = window.innerHeight;
  nav.style.top = nav_top > 0 ? `${nav_top + movementY}px` : "1px";
  if (nav_top > window_height - nav_height) nav.style.top = `${window_height - nav_height}px`
}

nav.addEventListener("mouseup", () => {
  nav.removeEventListener("mousemove", onDrag);
})
nav.addEventListener("mouseleave", () => {
  nav.removeEventListener("mousemove", onDrag);
})

//main slide
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener("click", () => {
  let slides = document.querySelectorAll('.main-slide__container li');
  document.querySelector(".main-slide__container").prepend(slides[slides.length - 1]);
})

next.addEventListener("click", () => {
  let slides = document.querySelectorAll('.main-slide__container li');
  document.querySelector(".main-slide__container").append(slides[0]);
})


