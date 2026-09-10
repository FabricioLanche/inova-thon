const titles = {
  dashboard: "Resumen del pipeline",
  captacion: "Búsqueda unificada de terrenos",
  comparar: "Comparación de oportunidades",
  urbanistico: "Análisis urbanístico",
  ubicacion: "Ubicación y entorno",
  validacion: "Estudio de título",
  servicios: "Factibilidad de servicios",
  financiero: "Análisis de inversión y retorno",
  integral: "Prefactibilidad integral",
};

const LOTS = {
  A: { name: "Terreno A — Comas", sub: "3,500 m² · S/ 3.85 M", score: 92, cls: "", rec: "Avanzar a negociación", note: "Mejor relación rentabilidad / riesgo del pipeline.", metrics: [["Potencial edificatorio","8 pisos"],["Cabida estimada","231–247 deptos"],["Área vendible","14,800 m²"],["Rentabilidad bruta","22%"],["Valor de suelo","S/ 1,100 / m²"],["Riesgo registral","Bajo"]] },
  B: { name: "Terreno B — Los Olivos", sub: "2,800 m²", score: 78, cls: "", rec: "Viable · validar precio", note: "Buena cabida con un suelo a menor costo.", metrics: [["Potencial edificatorio","7 pisos"],["Cabida estimada","160–175 deptos"],["Área vendible","10,200 m²"],["Rentabilidad bruta","15%"],["Valor de suelo","S/ 1,000 / m²"],["Riesgo registral","Bajo"]] },
  C: { name: "Terreno C — SMP", sub: "1,950 m²", score: 64, cls: "mid", rec: "Requiere revisión", note: "Área bajo el umbral de 2,000 m² solicitado.", metrics: [["Potencial edificatorio","6 pisos"],["Cabida estimada","95–108 deptos"],["Área vendible","6,400 m²"],["Rentabilidad bruta","11%"],["Valor de suelo","S/ 1,050 / m²"],["Riesgo registral","Medio"]] },
  D: { name: "Terreno D — Independencia", sub: "2,400 m²", score: 58, cls: "mid", rec: "Requiere revisión", note: "Normativa pendiente de validar.", metrics: [["Potencial edificatorio","6 pisos"],["Cabida estimada","118–130 deptos"],["Área vendible","7,900 m²"],["Rentabilidad bruta","9%"],["Valor de suelo","S/ 1,100 / m²"],["Riesgo registral","Medio"]] },
  E: { name: "Terreno E — Rímac", sub: "1,800 m²", score: 52, cls: "mid", rec: "Bajo potencial", note: "Entorno en consolidación y demanda limitada.", metrics: [["Potencial edificatorio","5 pisos"],["Cabida estimada","62–74 deptos"],["Área vendible","4,400 m²"],["Rentabilidad bruta","7%"],["Valor de suelo","S/ 1,200 / m²"],["Riesgo registral","Medio-alto"]] },
  F: { name: "Terreno F — La Victoria", sub: "1,200 m² · S/ 2.40 M", score: 38, cls: "low", rec: "No recomendable", note: "No vale la pena iniciar SUNARP ni factibilidad de servicios con este score.", metrics: [["Potencial edificatorio","5 pisos"],["Cabida estimada","48–62 deptos"],["Área vendible","4,800 m²"],["Rentabilidad bruta","6%"],["Valor de suelo","S/ 2,000 / m²"],["Uso","Con restricciones"]] },
};

function show(id) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  document.querySelectorAll(".nav button").forEach((b) => b.classList.toggle("active", b.dataset.view === id));
  const view = document.getElementById(id);
  if (view) view.classList.add("active");
  const sub = document.getElementById("subtitle");
  if (sub) sub.textContent = titles[id] || "PredIA";
  requestAnimationFrame(() => view && view.querySelectorAll(".num").forEach(animateNum));
}

function parseAmount(str) {
  const m = str.match(/^(\D*?)([\d.,]+)(\D*)$/);
  if (!m) return null;
  const raw = m[2];
  const hasDec = raw.includes(".");
  const num = parseFloat(raw.replace(/,/g, ""));
  return { prefix: m[1], suffix: m[3], num, hasDec };
}

function animateNum(el) {
  const parsed = parseAmount(el.textContent.trim());
  if (!parsed || !isFinite(parsed.num)) return;
  const { prefix, suffix, num, hasDec } = parsed;
  if (num === 0) return;
  const dur = 900;
  const start = performance.now();
  const fmt = (v) => (hasDec ? v.toFixed(1) : Math.round(v).toLocaleString("en-US"));
  const step = (t) => {
    const p = Math.min(1, (t - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + fmt(num * eased) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function toast(msg, type = "") {
  let wrap = document.querySelector(".toast-wrap");
  if (!wrap) {
    wrap = document.createElement("div");
    wrap.className = "toast-wrap";
    document.body.appendChild(wrap);
  }
  const t = document.createElement("div");
  t.className = "toast " + type;
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => t.classList.add("out"), 2600);
  setTimeout(() => t.remove(), 3000);
}

function renderFicha(el, lot, best) {
  const btn = best
    ? '<button class="btn" style="margin-top:14px" data-view="integral">Ver ficha completa</button>'
    : "";
  const headPill = best ? "ok" : "bad";
  const headText = best ? "Ficha de viabilidad — Mayor potencial" : "Ficha de viabilidad — Menor potencial";
  el.innerHTML = `
    <span class="pill ${headPill}">${headText}</span>
    <h2 style="margin-top:10px">${lot.name}</h2>
    <div class="score lg pop ${lot.cls}" style="margin:12px 0">${lot.score}</div>
    <p class="pill ${lot.cls === "low" ? "bad" : lot.cls === "mid" ? "warn" : "ok"}">${lot.rec}</p>
    <div class="metrics" style="margin-top:12px">
      ${lot.metrics.map(([k, v]) => `<div class="metric">${k}<b>${v}</b></div>`).join("")}
    </div>
    ${btn}${best ? "" : `<p class="tiny" style="margin-top:12px">${lot.note}</p>`}`;
  setTimeout(() => {
    const s = el.querySelector(".score.pop");
    if (s) s.classList.remove("pop");
    setTimeout(() => s && s.classList.add("pop"), 20);
  }, 50);
}

function applyFilters() {
  const active = Array.from(document.querySelectorAll(".source-filter:checked")).map((c) => c.dataset.source);
  let visible = 0;
  document.querySelectorAll(".lot[data-source]").forEach((lot) => {
    const on = active.includes(lot.dataset.source);
    lot.style.display = on ? "" : "none";
    if (on) visible++;
  });
  const label = document.querySelector("[data-lot-count]");
  if (label) label.textContent = "Terrenos encontrados (" + visible + ") · Mayor potencial";
}

document.addEventListener("click", (e) => {
  const toastEl = e.target.closest("[data-toast]");
  if (toastEl) toast(toastEl.dataset.toast, toastEl.dataset.toastType || "");
  const btn = e.target.closest("[data-view]");
  if (btn) show(btn.dataset.view);
});

document.querySelectorAll(".lot-row[data-lot]").forEach((row) => {
  row.addEventListener("click", () => {
    const best = LOTS[row.dataset.lot];
    const worst = Object.values(LOTS).filter((l) => l !== best).reduce((a, b) => (b.score < a.score ? b : a));
    renderFicha(document.getElementById("ficha-best"), best, true);
    renderFicha(document.getElementById("ficha-worst"), worst, false);
    document.querySelectorAll(".lot-row").forEach((x) => x.classList.toggle("sel", x === row));
  });
});

document.querySelectorAll(".source-filter").forEach((c) => c.addEventListener("change", applyFilters));

const search = document.getElementById("search");
if (search) {
  search.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      toast("Búsqueda simulada: Comas · ≥ 2,000 m² · vivienda social");
      search.blur();
    }
  });
}

applyFilters();
show("dashboard");