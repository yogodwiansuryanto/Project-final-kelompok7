// var swiper = new swiper(".slide-container", {
//     slidePerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     navigation: {
//         nextE1: ".swiper-button-next",
//         prevE1: ".swiper-button-prev",
//     },
// });

    /* Card Slider - Swiper */
	var cardSlider = new Swiper('.card-slider', {
		// autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false
		// },
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        centerSlide: "true",
        grabCursor: "true",
        fade: "true",
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
        breakpoints: {
            // when window is <= 639px
            639: {
                slidesPerView:1,
            },

            // when window is <= 767px
            767: {
                slidesPerView: 2,
            },
            // when window is <= 1023px
            1023: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            // 1440: {
            //     slidesPerView: 5,
            //     spaceBetween: 40                
            // }
        }
    });