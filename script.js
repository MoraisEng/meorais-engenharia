function entrarArea(pagina, senhaCorreta) {
  const senha = prompt('Digite a senha:');
  if (senha === senhaCorreta) {
    window.location.href = pagina;
  } else {
    alert('Senha incorreta!');
  }
}

function abrirComSenha(senhaCorreta, url) {
  const senha = prompt('Digite a senha para acessar o documento:');
  if (senha === senhaCorreta) {
    window.open(url, '_blank');
  } else {
    alert('Senha incorreta!');
  }
}
