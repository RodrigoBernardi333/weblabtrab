//API do JS conhecida como Swiper, https://swiperjs.com/swiper-api

var swiper = new Swiper(".swiper",{
    cssMode: true,
    loop:true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination:{
        el:".swiper-pagination"
    },
    Keyboard: true,
});