function mostrarArea(id) {
  document.querySelectorAll('section.area').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function mostrarSecao(id) {
  document.querySelectorAll('div.subarea').forEach(sa => sa.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}
