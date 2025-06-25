function toggleAcessibilidadeMenu() {
    const menu = document.getElementById('acessibilidade-menu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
}

function alterarFonte(fonte) {
    document.body.style.fontFamily = fonte;
}


var msgCookies = document.getElementById('cookies-msg');

if (localStorage.getItem('lgpd') === 'sim') {
  msgCookies.classList.remove('mostrar');
} else {
  msgCookies.classList.add('mostrar');
}

function aceito() {
  localStorage.setItem('lgpd', 'sim');
  msgCookies.classList.remove('mostrar');
}

// Coloque o botão para chamar essa função aceito() no seu HTML

function aceito(){
  localStorage
}
