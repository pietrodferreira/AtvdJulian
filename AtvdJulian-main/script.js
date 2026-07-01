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
  if (label) {
    label.textContent = `Categoria selecionada: ${category}`;
  }
}

function toggleDarkTheme() {
  const body = document.body;
  const button = document.getElementById('themeToggleBtn');
  const isDark = body.classList.toggle('dark-theme');

  if (button) {
    button.innerHTML = isDark
      ? '<i class="fas fa-sun"></i> Tema claro'
      : '<i class="fas fa-moon"></i> Configurações';
  }

  localStorage.setItem('awphoto-theme', isDark ? 'dark' : 'light');
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('awphoto-theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    const button = document.getElementById('themeToggleBtn');
    if (button) {
      button.innerHTML = '<i class="fas fa-sun"></i> Tema claro';
    }
  }
});

window.addEventListener('click', function (event) {
  const modal = document.getElementById('moreModal');
  if (event.target === modal) {
    closeMoreModal();
  }
});
