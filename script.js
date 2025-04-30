function acessarMapa(nomeMapa, senha, urlMapa) {
    let senhaInformada = prompt(`Digite a senha para acessar ${nomeMapa}:`);
    if (senhaInformada === senha) {
        window.open(urlMapa, '_blank');
    } else {
        alert('Senha incorreta!');
    }
}
