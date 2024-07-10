
import "slick-carousel"
import $ from 'jquery';

export const sec3 = () => {
    
    $('.slick-2').slick({
        autoplay: true,
        speed: 800,
        autoplaySpeed: 7000,
        infinite: true,
        // lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1,
        
        prevArrow:' <i class="fa-solid fa-arrow-left     prev"></i>',
        nextArrow:' <i class="fa-solid fa-arrow-right     next"></i>',
        // fade: true,
        // cssEase: 'linear',
       
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });
    

    const starsNum=document.querySelectorAll('.numStarsss');
    const stars=document.querySelectorAll('.card .stars');


    starsNum.forEach((ele,index)=>{

        let img=''
        for (let i=0;i<Math.floor(ele.innerHTML);i++){
            img+='<img src="assets/images/sec3/Star.svg" alt="star">'
        }
       
        stars[index].innerHTML =img
        if (ele.innerHTML-Math.floor(ele.innerHTML)!==0){
            stars[index].innerHTML +='<img src="assets/images/sec3/halfStar.svg" alt="star">'
        }
        

        stars[index].innerHTML +=`
            <span>
                <span class="numStars">${ele.innerHTML}</span>
                <span class="five">/5</span>
            </span>
        `
       
    })
    
}