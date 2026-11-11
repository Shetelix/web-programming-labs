// ==========================================================
// script.js — Лабораторна робота №4 (Частина 1, «чистий» JavaScript)
// 1. Інформація про ОС і браузер -> localStorage -> футер
// 2. Відгуки з JSONPlaceholder (Fetch API, async/await)
// 3. Модальне вікно з формою зворотного зв'язку через 1 хвилину
// 4. Денна / нічна тема (автоматично за часом + вручну)
// ==========================================================

const VARIANT = 23; // номер варіанта = порядковий номер у журналі групи
const MODAL_DELAY_MS = 60 * 1000; // 1 хвилина

// ---------- 1. Зберігання даних у браузері ----------

function collectSystemInfo() {
  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: navigator.languages.join(', '),
    cookieEnabled: String(navigator.cookieEnabled),
    online: String(navigator.onLine),
    hardwareConcurrency: String(navigator.hardwareConcurrency ?? 'н/д'),
    screen: `${screen.width}×${screen.height}`,
    viewport: `${window.innerWidth}×${window.innerHeight}`,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    visitedAt: new Date().toLocaleString('uk-UA'),
  };
}

function saveSystemInfo() {
  const info = collectSystemInfo();
  // localStorage зберігає лише рядки -> кожне значення записуємо окремим ключем,
  // а весь об'єкт додатково серіалізуємо через JSON.stringify
  for (const [key, value] of Object.entries(info)) {
    localStorage.setItem(key, value);
  }
  localStorage.setItem('systemInfo', JSON.stringify(info));
}

function renderLocalStorage() {
  const list = document.getElementById('storage-list');
  list.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key === 'systemInfo') continue; // це той самий об'єкт, але одним рядком JSON
    const dt = document.createElement('dt');
    dt.textContent = key;
    const dd = document.createElement('dd');
    dd.textContent = localStorage.getItem(key);
    list.append(dt, dd);
  }
}

// ---------- 2. Відгуки з сервера ----------

async function loadReviews() {
  const status = document.getElementById('reviews-status');
  const list = document.getElementById('reviews-list');
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const comments = await response.json();

    // виводимо коментарі в порядку отримання
    for (const comment of comments) {
      const card = document.createElement('article');
      card.className = 'review';

      const title = document.createElement('h3');
      title.textContent = comment.name;
      const email = document.createElement('p');
      email.className = 'review-email';
      email.textContent = comment.email;
      const body = document.createElement('p');
      body.textContent = comment.body;

      card.append(title, email, body);
      list.append(card);
    }
    status.textContent = `Отримано відгуків: ${comments.length}`;
  } catch (error) {
    status.textContent = `Не вдалося завантажити відгуки: ${error.message}`;
    console.error(error);
  }
}

// ---------- 3. Модальне вікно зворотного зв'язку ----------

function setupFeedbackModal() {
  const modal = document.getElementById('feedback-modal');
  const closeBtn = document.getElementById('modal-close');

  const open = () => {
    modal.hidden = false;
    document.getElementById('f-name').focus();
  };
  const close = () => {
    modal.hidden = true;
    sessionStorage.setItem('feedbackShown', 'true'); // не показувати повторно в цій сесії
  };

  if (sessionStorage.getItem('feedbackShown') !== 'true') {
    setTimeout(open, MODAL_DELAY_MS);
  }

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) close(); // клік по затемненому фону
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) close();
  });
}

// ---------- 4. Денна / нічна тема ----------

function themeByTime(date = new Date()) {
  const hours = date.getHours();
  return hours >= 7 && hours < 21 ? 'light' : 'dark'; // день: 07:00–20:59
}

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  document.getElementById('theme-toggle').textContent =
    theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема';
}

function setupTheme() {
  let theme = themeByTime(); // автоматичний вибір за поточним часом
  applyTheme(theme);

  document.getElementById('theme-toggle').addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
  });
}

// ---------- Запуск після завантаження DOM ----------

document.addEventListener('DOMContentLoaded', () => {
  setupTheme();
  saveSystemInfo();
  renderLocalStorage();
  loadReviews();
  setupFeedbackModal();
});
