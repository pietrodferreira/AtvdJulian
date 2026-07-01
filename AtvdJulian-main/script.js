function openMoreModal() {
  const modal = document.getElementById('moreModal');
  if (modal) {
    modal.style.display = 'grid';
  }
}

function closeMoreModal() {
  const modal = document.getElementById('moreModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function selectCategory(category) {
  const label = document.getElementById('selectedCategory');
  const buttons = document.querySelectorAll('.category-btn');

  buttons.forEach((button) => {
    button.classList.toggle('active', button.textContent.trim() === category);
  });

  if (label) {
    label.textContent = `Mostrando: ${category.toLowerCase()}`;
  }
}

function toggleSettingsPanel() {
  const panel = document.getElementById('themeOptions');
  if (panel) {
    panel.classList.toggle('hidden');
  }
}

function setTheme(theme) {
  const body = document.body;
  const toggleButton = document.getElementById('themeToggleBtn');
  const lightButton = document.getElementById('themeLightBtn');

  body.classList.toggle('dark-theme', theme === 'dark');
  localStorage.setItem('awphoto-theme', theme);

  if (toggleButton && lightButton) {
    toggleButton.innerHTML = theme === 'dark'
      ? '<i class="fas fa-sun"></i> Tema claro'
      : '<i class="fas fa-moon"></i> Tema escuro';
    lightButton.innerHTML = theme === 'light'
      ? '<i class="fas fa-sun"></i> Tema claro'
      : '<i class="fas fa-moon"></i> Tema claro';
  }
}

function toggleDarkTheme() {
  const body = document.body;
  const isDark = !body.classList.contains('dark-theme');
  setTheme(isDark ? 'dark' : 'light');
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('awphoto-theme');
  if (savedTheme === 'dark') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});

window.addEventListener('click', function (event) {
  const modal = document.getElementById('moreModal');
  if (event.target === modal) {
    closeMoreModal();
  }
});
