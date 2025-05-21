function mostrarArea(id) {
  document.querySelectorAll('section.area').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function mostrarSecao(id) {
  document.querySelectorAll('.subarea, .left, .right').forEach(el => {
    if (el.id) el.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

