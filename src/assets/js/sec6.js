
import "slick-carousel"
import $ from 'jquery';

export const sec6 = () => {
    
    $('.slick-3').slick({
        autoplay: true,
        speed: 800,
        autoplaySpeed: 7000,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
       
        
        prevArrow:' <i class="fa-solid fa-arrow-left     prev"></i>',
        nextArrow:' <i class="fa-solid fa-arrow-right     next"></i>',
        // fade: true,
        // cssEase: 'linear',
       
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
    

}