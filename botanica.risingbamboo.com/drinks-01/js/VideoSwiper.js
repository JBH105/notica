var videoSwiper = new Swiper('.video-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: '.video-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.video-next',
        prevEl: '.video-prev',
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
            spaceBetween: 20,
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

