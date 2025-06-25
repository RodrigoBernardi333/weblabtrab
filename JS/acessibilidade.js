// Mostrar/ocultar o menu de acessibilidade
function toggleAcessibilidadeMenu() {
  const menu = document.getElementById('acessibilidade-menu');
  menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
}

// Alterar o tamanho da fonte de toda a página
function alterarTamanhoFonte(tamanho) {
  const textos = document.querySelectorAll(
    'p, h1, h2, h3, h4, h5, h6, a, label, .text, .titulo, .texto1, .textoservico, li, input, button'
  );
  textos.forEach(el => {
    el.style.fontSize = tamanho;
  });
}

// Alterar a cor do texto de toda a página
function alterarCorTexto(cor) {
  document.body.style.color = cor;

  const textos = document.querySelectorAll(
    '.text, .perfil p, h1, h2, h3, h4, h5, h6, a, label, .titulo, .texto1, .textoservico, li'
  );

  textos.forEach(el => {
    if (!el.classList.contains('fixo')) {
      el.style.color = cor;
    }
  });
}
