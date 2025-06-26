document.addEventListener("DOMContentLoaded", () => {
  const msgCookies = document.getElementById('cookies-msg');

  if (localStorage.getItem('lgpd') !== 'sim') {
    msgCookies.classList.add('mostrar');
  }

  window.aceito = function () {
    localStorage.setItem('lgpd', 'sim');
    msgCookies.classList.remove('mostrar');
  }
});