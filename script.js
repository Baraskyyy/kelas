document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
  
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  
    // Optional: auto-close menu saat klik link
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  });
  
  
  
document.addEventListener("DOMContentLoaded", function () {
  const buka = document.querySelector('.buka');
  const getStartedBtn = document.querySelector('.btn');
  const body = document.getElementById('body');

  getStartedBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Slide the intro up
    buka.classList.add('slide-up');

    // Tampilkan isi setelah delay animasi
    setTimeout(() => {
      buka.style.display = 'none';
      body.classList.add('show-content');
    }, 1200); // match the duration in CSS
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const buka = document.querySelector('.buka');
    const getStartedBtn = document.querySelector('.btn');
    const body = document.getElementById('body');
    const audio = document.getElementById('intro-audio');
  
    getStartedBtn.addEventListener('click', function (e) {
      e.preventDefault();
  
      // Play audio
      audio.play().catch(err => {
        console.warn("Autoplay failed:", err);
      });
  
      // Slide the intro up
      buka.classList.add('slide-up');
  
      // Tampilkan isi setelah delay animasi
      setTimeout(() => {
        buka.style.display = 'none';
        body.classList.add('show-content');
      }, 1200);
    });
  });
  
  const canvas = document.getElementById("snow-canvas");
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let snowflakes = [];

function createSnowflakes() {
  for (let i = 0; i < 100; i++) {
    snowflakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 3 + 1,
      speedY: Math.random() * 1 + 0.5,
      speedX: Math.random() * 0.5 - 0.25
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let flake of snowflakes) {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
  }
  ctx.fill();
  moveSnowflakes();
}

function moveSnowflakes() {
  for (let flake of snowflakes) {
    flake.y += flake.speedY;
    flake.x += flake.speedX;

    if (flake.y > height) {
      flake.y = 0;
      flake.x = Math.random() * width;
    }
    if (flake.x > width || flake.x < 0) {
      flake.x = Math.random() * width;
    }
  }
}

function animateSnow() {
  drawSnowflakes();
  requestAnimationFrame(animateSnow);
}

createSnowflakes();
animateSnow();

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});
