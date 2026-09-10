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

function show(id) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  document.querySelectorAll(".nav button").forEach((b) => b.classList.toggle("active", b.dataset.view === id));
  const view = document.getElementById(id);
  if (view) view.classList.add("active");
  const sub = document.getElementById("subtitle");
  if (sub) sub.textContent = titles[id] || "ViableVIS";
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-view]");
  if (!btn) return;
  show(btn.dataset.view);
});
