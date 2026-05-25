const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const translations = {
  en: {
    "nav.principles": "Principles",
    "nav.modules": "Modules",
    "nav.method": "Method",
    "nav.contact": "Contact",
    "hero.eyebrow": "Personal Operations Lab",
    "hero.titleA": "Human-led systems for",
    "hero.titleB": "AI-assisted operations.",
    "hero.subtitle": "Monitoring, automation, data aggregation, and process intelligence shaped by practical IT experience and careful AI collaboration.",
    "hero.ctaExplore": "Explore the lab",
    "hero.ctaContact": "Contact",
    "chips.selfHosted": "self-hosted mindset",
    "chips.processFirst": "process-first",
    "chips.monitored": "monitored systems",
    "chips.accountable": "human accountable",
    "panel.telemetry": "lab telemetry",
    "panel.online": "online",
    "about.kicker": "About",
    "about.title": "Built by Jarek Koscielecki.",
    "about.p1": "I build small, focused operational tools with AI as a design and implementation partner. My background is in IT systems, service operations, process architecture, and practical automation.",
    "about.p2": "This lab documents a private ecosystem of experiments around monitoring, decision support, data aggregation, and everyday workflows. Public concepts, private operations.",
    "principles.kicker": "Principles",
    "principles.title": "Operational rules for useful AI systems.",
    "principles.subtitle": "The lab favors tools that are explainable, monitored, bounded, and shaped by real use.",
    "principles.small.title": "Small tools over monoliths",
    "principles.small.text": "Focused systems are easier to understand, audit, and evolve.",
    "principles.monitoring.title": "Monitoring from day one",
    "principles.monitoring.text": "Every useful tool needs health, alerts, and operational visibility.",
    "principles.human.title": "Human control over automation",
    "principles.human.text": "AI can accelerate work, but decisions stay accountable.",
    "principles.private.title": "Private by default",
    "principles.private.text": "Personal infrastructure should expose only what is intentional.",
    "modules.kicker": "Lab Modules",
    "modules.title": "A private ecosystem, described publicly.",
    "modules.subtitle": "These are conceptual descriptions only. Private deployments are not linked from this site.",
    "modules.harem": "Ecosystem console for apps, status, backlog, and operational overview.",
    "modules.klaudia": "Multi-model AI interface for structured conversations and experiments.",
    "modules.szynka": "Rail delay monitor with notifications and operational safeguards.",
    "modules.agnes": "News intelligence and source aggregation pipeline.",
    "modules.medea": "Appointment monitoring workflow for availability checks and alerts.",
    "modules.penny": "Price intelligence assistant for tracking offers and market signals.",
    "method.kicker": "Method",
    "method.title": "A loop for building practical tools.",
    "method.observe.title": "Observe",
    "method.observe.text": "Find a repetitive, fragile, or time-sensitive workflow.",
    "method.design.title": "Design",
    "method.design.text": "Model the process, data sources, risks, and failure modes.",
    "method.build.title": "Build",
    "method.build.text": "Create a small tool with clear boundaries and simple deployment.",
    "method.audit.title": "Audit",
    "method.audit.text": "Review quality, safety, cost, and operational risk before expanding.",
    "method.monitor.title": "Monitor",
    "method.monitor.text": "Add health checks, alerts, and feedback loops.",
    "method.iterate.title": "Iterate",
    "method.iterate.text": "Improve based on real use, not imagined scale.",
    "contact.kicker": "Contact",
    "contact.title": "AI-assisted operations, built carefully.",
    "contact.text": "Want to talk about practical AI workflows, monitoring, or process automation?",
    "footer.line": "Human-led. AI-assisted. Process-first.",
    ticker: [
      "observe -> design -> build -> audit -> monitor -> iterate",
      "small tools over monoliths",
      "human accountable, AI assisted",
      "private operations, public concepts",
      "monitoring from day one",
      "process intelligence online",
    ],
  },
  pl: {
    "nav.principles": "Zasady",
    "nav.modules": "Moduły",
    "nav.method": "Metoda",
    "nav.contact": "Kontakt",
    "hero.eyebrow": "Personal Operations Lab",
    "hero.titleA": "Systemy prowadzone przez człowieka,",
    "hero.titleB": "wspierane przez AI.",
    "hero.subtitle": "Monitoring, automatyzacja, agregacja danych i inteligencja procesowa, budowane na praktycznym doświadczeniu IT i uważnej współpracy z AI.",
    "hero.ctaExplore": "Zobacz lab",
    "hero.ctaContact": "Kontakt",
    "chips.selfHosted": "self-hosted mindset",
    "chips.processFirst": "process-first",
    "chips.monitored": "systemy monitorowane",
    "chips.accountable": "człowiek decyduje",
    "panel.telemetry": "telemetria labu",
    "panel.online": "online",
    "about.kicker": "O mnie",
    "about.title": "Tworzone przez Jarka Kościeleckiego.",
    "about.p1": "Buduję małe, konkretne narzędzia operacyjne, w których AI jest partnerem w projektowaniu i implementacji. Moje doświadczenie obejmuje systemy IT, operacje usług, architekturę procesów i praktyczną automatyzację.",
    "about.p2": "Ten lab opisuje prywatny ekosystem eksperymentów wokół monitoringu, wsparcia decyzji, agregacji danych i codziennych workflow. Publiczne są koncepcje; operacje pozostają prywatne.",
    "principles.kicker": "Zasady",
    "principles.title": "Reguły operacyjne dla użytecznych systemów AI.",
    "principles.subtitle": "Lab stawia na narzędzia wyjaśnialne, monitorowane, ograniczone zakresem i rozwijane przez realne użycie.",
    "principles.small.title": "Małe narzędzia zamiast monolitów",
    "principles.small.text": "Skupione systemy łatwiej zrozumieć, audytować i rozwijać.",
    "principles.monitoring.title": "Monitoring od pierwszego dnia",
    "principles.monitoring.text": "Każde użyteczne narzędzie potrzebuje health checków, alertów i widoczności operacyjnej.",
    "principles.human.title": "Kontrola człowieka nad automatyzacją",
    "principles.human.text": "AI może przyspieszać pracę, ale odpowiedzialność za decyzje zostaje po stronie człowieka.",
    "principles.private.title": "Prywatność domyślnie",
    "principles.private.text": "Prywatna infrastruktura powinna ujawniać tylko to, co zostało świadomie wystawione.",
    "modules.kicker": "Moduły labu",
    "modules.title": "Prywatny ekosystem, opisany publicznie.",
    "modules.subtitle": "To są tylko opisy koncepcyjne. Prywatne wdrożenia nie są linkowane z tej strony.",
    "modules.harem": "Konsola ekosystemu dla aplikacji, statusów, backlogu i przeglądu operacyjnego.",
    "modules.klaudia": "Interfejs multi-model AI do rozmów strukturalnych i eksperymentów.",
    "modules.szynka": "Monitor opóźnień kolejowych z powiadomieniami i zabezpieczeniami operacyjnymi.",
    "modules.agnes": "Pipeline agregacji źródeł i inteligencji newsowej.",
    "modules.medea": "Workflow monitorowania terminów, dostępności i alertów.",
    "modules.penny": "Asystent price intelligence do śledzenia ofert i sygnałów rynkowych.",
    "method.kicker": "Metoda",
    "method.title": "Pętla budowania praktycznych narzędzi.",
    "method.observe.title": "Obserwuj",
    "method.observe.text": "Znajdź powtarzalny, kruchy albo czasowo wrażliwy proces.",
    "method.design.title": "Projektuj",
    "method.design.text": "Opisz proces, źródła danych, ryzyka i tryby awarii.",
    "method.build.title": "Buduj",
    "method.build.text": "Stwórz małe narzędzie z jasnymi granicami i prostym wdrożeniem.",
    "method.audit.title": "Audytuj",
    "method.audit.text": "Sprawdź jakość, bezpieczeństwo, koszt i ryzyko operacyjne przed rozbudową.",
    "method.monitor.title": "Monitoruj",
    "method.monitor.text": "Dodaj health checki, alerty i pętle informacji zwrotnej.",
    "method.iterate.title": "Iteruj",
    "method.iterate.text": "Ulepszaj na podstawie realnego użycia, nie wyobrażonej skali.",
    "contact.kicker": "Kontakt",
    "contact.title": "Operacje wspierane przez AI, budowane uważnie.",
    "contact.text": "Chcesz porozmawiać o praktycznych workflow AI, monitoringu albo automatyzacji procesów?",
    "footer.line": "Human-led. AI-assisted. Process-first.",
    ticker: [
      "obserwuj -> projektuj -> buduj -> audytuj -> monitoruj -> iteruj",
      "małe narzędzia zamiast monolitów",
      "człowiek odpowiada, AI wspiera",
      "publiczne koncepcje, prywatne operacje",
      "monitoring od pierwszego dnia",
      "inteligencja procesowa online",
    ],
  },
};

let currentLang = localStorage.getItem("jarqs-lang") || "en";
let tickerMessages = translations[currentLang].ticker;

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

function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : "en";
  tickerMessages = translations[currentLang].ticker;
  tickerIndex = 0;
  document.documentElement.lang = currentLang;
  document.body.dataset.lang = currentLang;
  localStorage.setItem("jarqs-lang", currentLang);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[currentLang][key];
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.classList.toggle("active", button.dataset.langOption === currentLang);
    button.setAttribute("aria-pressed", String(button.dataset.langOption === currentLang));
  });
  if (ticker) ticker.textContent = tickerMessages[0];
}

document.querySelectorAll("[data-lang-option]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langOption));
});

applyLanguage(currentLang);

if (ticker && !reducedMotion) {
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
