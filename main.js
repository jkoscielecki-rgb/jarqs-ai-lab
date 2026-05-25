const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const tickerMessages = [
  "observe -> design -> build -> audit -> monitor -> iterate",
  "small tools over monoliths",
  "human accountable, AI assisted",
  "private operations, public concepts",
  "monitoring from day one",
  "process intelligence online",
];

const ticker = document.querySelector("#ticker-text");
let tickerIndex = 0;

function rotateTicker() {
  if (!ticker) return;
  tickerIndex = (tickerIndex + 1) % tickerMessages.length;
  ticker.style.opacity = "0";
  window.setTimeout(() => {
    ticker.textContent = tickerMessages[tickerIndex];
    ticker.style.opacity = "1";
  }, 180);
}

if (ticker && !reducedMotion) {
  ticker.textContent = tickerMessages[0];
  ticker.style.transition = "opacity 180ms ease";
  window.setInterval(rotateTicker, 3100);
}

const canvas = document.querySelector("#lab-canvas");
const ctx = canvas?.getContext("2d");
const pointer = { x: 0, y: 0, active: false };

let width = 0;
let height = 0;
let particles = [];
let rafId = 0;

function resizeCanvas() {
  if (!canvas || !ctx) return;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function createParticles() {
  const count = Math.min(84, Math.max(34, Math.floor((width * height) / 22000)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    r: Math.random() * 1.5 + 0.4,
  }));
}

function drawParticles() {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < -20) p.x = width + 20;
    if (p.x > width + 20) p.x = -20;
    if (p.y < -20) p.y = height + 20;
    if (p.y > height + 20) p.y = -20;
  }

  for (let i = 0; i < particles.length; i += 1) {
    const a = particles[i];
    for (let j = i + 1; j < particles.length; j += 1) {
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 118) {
        const alpha = (1 - dist / 118) * 0.18;
        ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    if (pointer.active) {
      const pd = Math.hypot(a.x - pointer.x, a.y - pointer.y);
      if (pd < 170) {
        ctx.strokeStyle = `rgba(255, 43, 214, ${(1 - pd / 170) * 0.24})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(pointer.x, pointer.y);
        ctx.stroke();
      }
    }
  }

  for (const p of particles) {
    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
    gradient.addColorStop(0, "rgba(0, 229, 255, 0.68)");
    gradient.addColorStop(1, "rgba(0, 229, 255, 0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
    ctx.fill();
  }

  rafId = window.requestAnimationFrame(drawParticles);
}

function bootCanvas() {
  if (!canvas || !ctx || reducedMotion) return;
  resizeCanvas();
  createParticles();
  drawParticles();
}

window.addEventListener("resize", () => {
  window.cancelAnimationFrame(rafId);
  resizeCanvas();
  createParticles();
  drawParticles();
});

window.addEventListener("pointermove", (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  pointer.active = true;
});

window.addEventListener("pointerleave", () => {
  pointer.active = false;
});

bootCanvas();
