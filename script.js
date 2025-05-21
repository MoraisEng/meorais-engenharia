function mostrarSecao(id) {
  // esconde todas
  document.querySelectorAll('section.area').forEach(sec => sec.style.display = 'none');
  // mostra a desejada
  document.getElementById(id).style.display = 'block';
}
