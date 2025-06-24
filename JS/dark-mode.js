let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', () => {
  trilho.classList.toggle('light')
  body.classList.toggle('light')
})

//<script src="js/start.js"></script>


var msgCookies = document.getElementById('cookies-msg')

function aceito(){
  localStorage.lgpd = "sim"
  msgCookies.classList.remove('mostrar')
}
if(localStorage.lgpd == 'sim'){
  msgCookies.classList.remove('mostrar')
}else{
  msgCookies.classList.add('mostrar')
}