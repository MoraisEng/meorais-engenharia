function entrarArea(pagina, senha) {
  const input = prompt('Digite a senha:');
  if (input === senha) {
    window.location.href = pagina;
  } else {
    alert('Senha incorreta!');
  }
}

function acessarMapa(nomeMapa, senha, url) {
  const s = prompt(`Senha para ${nomeMapa}:`);
  if (s === senha) window.open(url, '_blank');
  else alert('Senha incorreta!');
}
