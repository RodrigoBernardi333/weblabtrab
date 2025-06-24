let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', () => {
  trilho.classList.toggle('light')
  body.classList.toggle('light')
})

//<script src="js/start.js"></script>


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
