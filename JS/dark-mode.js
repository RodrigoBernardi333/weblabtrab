// Pega o estado salvo no localStorage (com "getItem" minúsculo)
let darkmode = localStorage.getItem('darkmode');

// Seleciona o botão de toggle
const themeSwitch = document.getElementById('dark-mode-toggle');

// Função para ativar modo escuro
const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
}

// Função para desativar modo escuro
const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
}

// Ativa modo escuro automaticamente se estiver salvo no localStorage
if (darkmode === 'active') enableDarkmode();

// Escuta o clique no botão para alternar o modo
themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode');
  if (darkmode !== 'active') {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});