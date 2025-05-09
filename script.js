function acessarArea(areaId, senha) {
  const input = prompt(`Digite a senha para acessar a ${areaId === 'interna' ? 'ÁREA INTERNA' : 'ÁREA DOS CORRETORES'}:`);
  if (input === senha) {
    document.getElementById('areaInterna').style.display = (areaId === 'interna') ? 'block' : 'none';
    document.getElementById('areaCorretores').style.display = (areaId === 'corretores') ? 'block' : 'none';
  } else {
    alert('Senha incorreta!');
  }
}

function acessarMapa(nomeMapa, senha, urlMapa) {
  const senhaInformada = prompt(`Digite a senha para acessar ${nomeMapa}:`);
  if (senhaInformada === senha) {
    window.open(urlMapa, '_blank');
  } else {
    alert('Senha incorreta!');
  }
}
