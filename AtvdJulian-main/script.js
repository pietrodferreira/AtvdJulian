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

window.addEventListener('click', function (event) {
  const modal = document.getElementById('moreModal');
  if (event.target === modal) {
    closeMoreModal();
  }
});
