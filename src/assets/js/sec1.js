
import "slick-carousel"
import $ from 'jquery';

export const sec1 = () => {
    
    $('.slick').slick({
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 6000,
        infinite: true,
        // lazyLoad: 'ondemand',
        slidesToShow: 1,
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
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });


    const starsNum=document.querySelectorAll('.numStars');
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