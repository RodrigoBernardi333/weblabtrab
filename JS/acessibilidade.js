// Mostrar/ocultar o menu de acessibilidade
function toggleAcessibilidadeMenu() {
  const menu = document.getElementById('acessibilidade-menu');
  menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
}

// Alterar o tamanho da fonte de toda a página
function alterarTamanhoFonte(tamanho) {
  document.documentElement.style.fontSize = tamanho;
}

// Alterar a cor do texto de toda a página
function alterarCorTexto(cor) {
  document.body.style.color = cor;

  // Atualiza também todos os textos dentro de elementos com classe 'text'
  const textos = document.querySelectorAll('.text, .perfil p, h2, h1, a, label');
  textos.forEach(el => el.style.color = cor);
}
