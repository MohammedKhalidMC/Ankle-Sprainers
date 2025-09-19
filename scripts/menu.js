const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menu = document.getElementById("menu");
const backdrop = document.getElementById("backdrop");
let startX = 0;
let endX = 0;

function opnBar() {
  menu.classList.add("on");
  backdrop.classList.add("open");
}

function clsBar() {
  menu.classList.remove("on");
  backdrop.classList.remove("open");
}

menuBtn.addEventListener("click", () => {
  opnBar();
})

backdrop.addEventListener("click", () => {
  clsBar();
})

closeBtn.addEventListener("click", () => {
  clsBar();
})

document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  swipeOpen();
})

function swipeOpen() {
  const diff = endX - startX;
  const vw = window.innerWidth * 0.5;
  
  if (diff < -window.innerWidth * 0.25 && startX > vw) {
    opnBar();
  }
  
  if (diff > window.innerWidth * 0.15) {
    clsBar();
  }
}