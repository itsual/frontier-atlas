let atlas = {};
let activeFamily = "openai";
let activeModel = "sol";
const familyOrder = ["openai", "anthropic", "xai", "google"];

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function modelsFor(family) {
  return Object.entries(atlas.models || {})
    .filter(([, model]) => model.family === family)
    .map(([id, model]) => ({ id, ...model }));
}

function renderFamilies() {
  const familyGrid = document.querySelector("#family-grid");
  familyGrid.innerHTML = familyOrder.map(key => {
    const family = atlas.families?.[key];
    if (!family) return "";
    const pressed = key === activeFamily ? "true" : "false";
    return `<button class="model-card family-card ${key}" type="button" data-family="${key}" aria-pressed="${pressed}"><small>${escapeHtml(family.name)}</small><span class="arrow">\u2197</span><h3>${escapeHtml(family.short)}</h3><p>${escapeHtml(family.blurb)}</p></button>`;
  }).join("");
  familyGrid.querySelectorAll("[data-family]").forEach(button => button.addEventListener("click", () => {
    activeFamily = button.dataset.family;
    activeModel = atlas.families[activeFamily].defaultModel;
    renderFamilies();
    renderModels();
    renderDetail();
  }));
}

function renderModels() {
  const modelGrid = document.querySelector("#model-grid");
  const models = modelsFor(activeFamily);
  modelGrid.innerHTML = models.map(model => {
    const pressed = model.id === activeModel ? "true" : "false";
    return `<button class="model-card ${model.family}" type="button" data-model="${model.id}" aria-pressed="${pressed}"><small>${escapeHtml(model.role)}</small><span class="arrow">\u2197</span><h3>${escapeHtml(model.name)}</h3><p>${escapeHtml(model.route)}</p><div class="model-meta">${escapeHtml(model.price)}</div></button>`;
  }).join("");
  modelGrid.querySelectorAll("[data-model]").forEach(button => button.addEventListener("click", () => {
    activeModel = button.dataset.model;
    renderModels();
    renderDetail();
  }));
}

function renderDetail() {
  const detail = document.querySelector("#detail");
  const model = atlas.models?.[activeModel];
  const family = atlas.families?.[activeFamily];
  if (!model || !family) return;
  const siblings = modelsFor(model.family);
  detail.innerHTML = `<div class="detail-main"><p class="detail-label">${escapeHtml(family.name)} \u00b7 ${escapeHtml(model.role)} \u00b7 ${escapeHtml(model.price)}</p><h3>${escapeHtml(model.route)}</h3><p>${escapeHtml(model.text)}</p><div class="pills" style="margin-top:20px">${siblings.map(item => `<button class="pill" type="button" data-model="${item.id}" aria-pressed="${item.id === activeModel ? "true" : "false"}">${escapeHtml(item.name)}</button>`).join("")}</div></div><aside class="detail-side"><h4>Useful for</h4><ul>${model.uses.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul><h4 style="margin-top:22px">Move up when</h4><p>${escapeHtml(model.moveUp)}</p></aside>`;
  detail.querySelectorAll("[data-model]").forEach(button => button.addEventListener("click", () => {
    activeModel = button.dataset.model;
    activeFamily = atlas.models[activeModel].family;
    renderFamilies();
    renderModels();
    renderDetail();
  }));
}

function wireRecommend() {
  document.querySelector("#recommend").addEventListener("click", () => {
    const task = document.querySelector("#task").value;
    const priority = document.querySelector("#priority").value;
    const route = atlas.routes?.[task]?.[priority];
    if (!route) return;
    const [title, copy] = route;
    document.querySelector("#result").innerHTML = `<p class="result-kicker">your recommended starting point</p><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p>`;
    document.querySelector("#result").hidden = false;
  });
}

async function loadAtlas() {
  const detail = document.querySelector("#detail");
  try {
    const response = await fetch("data/atlas.json");
    if (!response.ok) throw new Error("Could not load atlas data");
    atlas = await response.json();
    activeFamily = "openai";
    activeModel = atlas.families.openai.defaultModel;
    renderFamilies();
    renderModels();
    renderDetail();
    wireRecommend();
  } catch (error) {
    detail.innerHTML = "<p>Atlas data could not load. Refresh the page and try again.</p>";
  }
}

loadAtlas();
