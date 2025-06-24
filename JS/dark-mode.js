function toggleAcessibilidadeMenu() {
    const menu = document.getElementById('acessibilidade-menu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
}

function alterarFonte(fonte) {
    document.body.style.fontFamily = fonte;
}

<<<<<<< HEAD
function alterarCorTexto(cor) {
    document.body.style.color = cor;
}
=======
 document.addEventListener("DOMContentLoaded", function () {
    const texto = document.getElementById('text4');

    texto.addEventListener('click', () => {
      texto.classList.toggle('piscando');
})});
>>>>>>> 072358a4295c0759419827efa807493e4e82ec52
