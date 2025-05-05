const shopMapsSwiper = new Swiper('.shop-maps-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.shop-maps-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.shop-maps-next',
        prevEl: '.shop-maps-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});


// const swiper = new Swiper('.services-slider', {
// 	slidesPerView: 3,
// 	spaceBetween: 20,
// 	loop: true,
// 	autoplay: {
// 		delay: 3000,
// 		disableOnInteraction: false,
// 	},
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 		draggable: true,
// 	},
// 	breakpoints: {
// 		0: {
// 			slidesPerView: 1,
// 			spaceBetween: 10,
// 		},
// 		768: {
// 			slidesPerView: 2,
// 			spaceBetween: 15,
// 		},
// 		1200: {
// 			slidesPerView: 3,
// 			spaceBetween: 20,
// 		},
// 	},
// });