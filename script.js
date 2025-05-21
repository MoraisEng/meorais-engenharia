function entrarArea(pagina, senha) {
  const input = prompt('Digite a senha:');
  if (input === senha) {
    window.location.href = pagina;
  } else {
    alert('Senha incorreta!');
  }
}

function mostrarInterna(id) {
  document.getElementById('terrabela').style.display = 'none';
  document.getElementById('ipanema').style.display  = 'none';
  document.getElementById(id).style.display         = 'block';
}
