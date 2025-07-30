const swiper = new Swiper('.swiper', {
    slidesPerView: 7,
    freeMode: true,
    loop: true,
    spaceBetween: 0,
    freeMode: true,
    speed: 6500,
    autoplay: {
        delay: 0,
    },
});

const mySwiper = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 2,
    freeMode: true,
    loop: true,
    spaceBetween: 44,
    freeMode: true,
    speed: 6500,
    autoplay: {
        delay: 0,
    },
});