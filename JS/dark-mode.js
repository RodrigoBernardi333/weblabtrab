let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', () => {
  trilho.classList.toggle('light')
  body.classList.toggle('light')
})

//<script src="js/start.js"></script>

document.addEventListener("DOMContentLoaded", function () {
  const texto = document.getElementById('text4');

  texto.addEventListener('click', () => {
    texto.classList.toggle('piscando');
  })
});
const slideContainer = document.getElementById('slide-container');
const totalSlides = slideContainer.children.length;
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  slideContainer.style.transform = `translateX(-${currentIndex * 300}px)`;
}, 1000); // Troca a 