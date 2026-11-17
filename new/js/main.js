import { themes, defaultThemeId } from './themes.js';

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const root = document.documentElement;
const picker = document.querySelector('#theme-picker');
const trigger = document.querySelector('#theme-trigger');
const options = document.querySelector('#theme-options');
const name = document.querySelector('#theme-name');
const status = document.querySelector('#theme-status');
const themeColor = document.querySelector('meta[name="theme-color"]');
const storageKey = 'speedgame-color-theme';
let selectedId = defaultThemeId;

// Storage can be unavailable in private browsing or sandboxed previews.
try {
  const saved = localStorage.getItem(storageKey);
  if (themes.some(theme => theme.id === saved)) selectedId = saved;
} catch { /* The selector still works without persistence. */ }

function applyTheme(id) {
  const theme = themes.find(theme => theme.id === id);
  if (!theme) return;
  for (const [key, value] of Object.entries(theme.colors)) {
    root.style.setProperty(`--${key}`, value);
  }
  root.dataset.theme = theme.id;
  name.textContent = theme.name;
  themeColor?.setAttribute('content', theme.colors.paper);
}

function selectTheme(theme) {
  selectedId = theme.id;
  applyTheme(selectedId);
  try { localStorage.setItem(storageKey, selectedId); } catch { /* Optional. */ }
  status.textContent = `${theme.name} selected. ${theme.description}.`;
}

function closePicker() {
  picker.open = false;
  applyTheme(selectedId);
}

for (const [index, theme] of themes.entries()) {
  const label = document.createElement('label');
  label.className = 'theme-option';
  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = 'color-theme';
  radio.value = theme.id;
  radio.checked = theme.id === selectedId;

  const copy = document.createElement('span');
  const title = document.createElement('span');
  title.className = 'theme-option-title';
  title.textContent = `${String(index + 1).padStart(2, '0')} · ${theme.name}`;
  const description = document.createElement('span');
  description.className = 'theme-option-description';
  description.textContent = theme.description;
  copy.append(title, description);

  const swatches = document.createElement('span');
  swatches.className = 'theme-swatches';
  swatches.setAttribute('aria-hidden', 'true');
  for (const key of ['paper', 'blue', 'sage', 'butter', 'accent']) {
    const swatch = document.createElement('i');
    swatch.style.backgroundColor = theme.colors[key];
    swatches.append(swatch);
  }

  label.append(radio, copy, swatches);
  label.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse' && picker.open) applyTheme(theme.id);
  });
  radio.addEventListener('focus', () => applyTheme(theme.id));
  radio.addEventListener('change', () => selectTheme(theme));
  // Commit on activation too, including a tap on the already-selected radio.
  radio.addEventListener('click', () => selectTheme(theme));
  options.append(label);
}

picker.addEventListener('pointerenter', event => {
  if (event.pointerType === 'mouse') picker.open = true;
});
picker.addEventListener('pointerleave', event => {
  // Touch pointers leave after a tap; dismissing here can swallow its click.
  if (event.pointerType !== 'mouse') return;
  applyTheme(selectedId);
  if (!options.contains(document.activeElement)) closePicker();
});
picker.addEventListener('toggle', () => {
  if (!picker.open) applyTheme(selectedId);
});
picker.addEventListener('focusout', event => {
  // Some touch browsers blur the summary without focusing the tapped radio.
  // Outside-pointer handling still dismisses the menu in that case.
  if (!event.relatedTarget) return;
  // Let focus move before deciding whether the whole widget was left.
  setTimeout(() => {
    if (!picker.contains(document.activeElement)) closePicker();
  }, 0);
});
picker.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    event.preventDefault();
    closePicker();
    trigger.focus();
  } else if (event.target === trigger && event.key === 'ArrowDown') {
    event.preventDefault();
    picker.open = true;
    options.querySelector('input:checked')?.focus();
  }
});
document.addEventListener('pointerdown', event => {
  if (!picker.contains(event.target)) closePicker();
});

applyTheme(selectedId);
document.querySelector('#theme-toolbar').hidden = false;
