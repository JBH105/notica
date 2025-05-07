var mapSwiper = new Swiper('.shop-maps-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '.shop-maps-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.shop-maps-next',
        prevEl: '.shop-maps-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});