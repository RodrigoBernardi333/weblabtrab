function toggleAcessibilidadeMenu() {
    const menu = document.getElementById('acessibilidade-menu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
}

function alterarFonte(fonte) {
    document.body.style.fontFamily = fonte;
}

function alterarCorTexto(cor) {
    document.body.style.color = cor;
}
