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

function selectFamily(key) {
  if (!atlas.families?.[key]) return;
  activeFamily = key;
  const models = modelsFor(key);
  const preferred = atlas.families[key].defaultModel;
  activeModel = models.some(model => model.id === preferred)
    ? preferred
    : (models[0]?.id || activeModel);
  render();
}

function selectModel(id) {
  const model = atlas.models?.[id];
  if (!model) return;
  activeModel = id;
  activeFamily = model.family;
  render();
}

function renderFamilies() {
  const familyGrid = document.querySelector("#family-grid");
  if (!familyGrid) return;
  familyGrid.innerHTML = familyOrder.map(key => {
    const family = atlas.families?.[key];
    if (!family) return "";
    const count = modelsFor(key).length;
    const pressed = key === activeFamily ? "true" : "false";
    return `<button class="family-chip ${key}" type="button" data-family="${key}" aria-pressed="${pressed}"><small>${escapeHtml(family.name)}</small><strong>${escapeHtml(family.short)}</strong><span>${count} models</span></button>`;
  }).join("");
  familyGrid.querySelectorAll("[data-family]").forEach(button => {
    button.addEventListener("click", () => selectFamily(button.dataset.family));
  });
}

function renderModels() {
  const modelGrid = document.querySelector("#model-grid");
  const modelLabel = document.querySelector("#model-grid-label");
  if (!modelGrid) return;
  const family = atlas.families?.[activeFamily];
  const models = modelsFor(activeFamily);
  if (modelLabel && family) {
    modelLabel.textContent = `${family.name} models  -  click any card`;
  }
  modelGrid.innerHTML = models.map(model => {
    const pressed = model.id === activeModel ? "true" : "false";
    return `<button class="model-card ${model.family}" type="button" data-model="${model.id}" aria-pressed="${pressed}"><small>${escapeHtml(model.role)}</small><span class="arrow">\u2197</span><h3>${escapeHtml(model.name)}</h3><p>${escapeHtml(model.route)}</p><div class="model-meta">${escapeHtml(model.price)}</div></button>`;
  }).join("");
  modelGrid.querySelectorAll("[data-model]").forEach(button => {
    button.addEventListener("click", () => selectModel(button.dataset.model));
  });
}

function renderDetail() {
  const detail = document.querySelector("#detail");
  if (!detail) return;
  const model = atlas.models?.[activeModel];
  const family = atlas.families?.[model?.family || activeFamily];
  if (!model || !family) return;
  const pills = (model.pills || []).map(item => `<span class="pill">${escapeHtml(item)}</span>`).join("");
  detail.innerHTML = `<div class="detail-main"><p class="detail-label">${escapeHtml(family.name)} \u00b7 ${escapeHtml(model.role)} \u00b7 ${escapeHtml(model.price)}</p><h3>${escapeHtml(model.name)}</h3><p class="detail-route">${escapeHtml(model.route)}</p><p>${escapeHtml(model.text)}</p><div class="pills" style="margin-top:20px">${pills}</div></div><aside class="detail-side"><h4>Useful for</h4><ul>${model.uses.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul><h4 style="margin-top:22px">Move up when</h4><p>${escapeHtml(model.moveUp)}</p></aside>`;
}

function render() {
  renderFamilies();
  renderModels();
  renderDetail();
}

function wireRecommend() {
  const button = document.querySelector("#recommend");
  if (!button) return;
  button.addEventListener("click", () => {
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
    render();
    wireRecommend();
  } catch (error) {
    if (detail) detail.innerHTML = "<p>Atlas data could not load. Refresh the page and try again.</p>";
  }
}

loadAtlas();
