

export const sec9 = () => {



    const starsNum = document.querySelectorAll('.numStarss');
    const stars = document.querySelectorAll('.card9 .stars');


    const btnRev1 = document.querySelector('.btn-rev1');
    const secRev1 = document.querySelector('.sec-rev1');
    const btnRev2 = document.querySelector('.btn-rev2');
    const secRev2 = document.querySelector('.sec-rev2');
    const btnRev3 = document.querySelector('.btn-rev3');
    const secRev3 = document.querySelector('.sec-rev3');

    const des = document.querySelector('.des-text');
    const title = document.querySelector('.title-text');
    const des2 = document.querySelector('.des-text2');
    const title2 = document.querySelector('.title-text2');
    const des3 = document.querySelector('.des-text3');
    const title3 = document.querySelector('.title-text3');

   


    if (btnRev1 !== null) {



        starsNum.forEach((ele, index) => {

            let img = ''
            for (let i = 0; i < Math.floor(ele.innerHTML); i++) {
                img += '<img src="assets/images/sec3/Star.svg" alt="star">'
            }

            stars[index].innerHTML = img
            if (ele.innerHTML - Math.floor(ele.innerHTML) !== 0) {
                stars[index].innerHTML += '<img src="assets/images/sec3/halfStar.svg" alt="star">'
            }




        })


        btnRev1.addEventListener('click', () => {


            secRev1.innerHTML += `

            <div class="col-6">
                <div class="card9  text-start">
                    <div class="pointstars d-flex justify-content-between align-items-center">
                        <div class="stars">
                            <img src="assets/images/sec3/Star.svg" alt="star">
                            <img src="assets/images/sec3/Star.svg" alt="star">
                            <img src="assets/images/sec3/Star.svg" alt="star">
                            <img src="assets/images/sec3/halfStar.svg" alt="star">
                        </div>
                    <img src="../../assets/images/sec9/points.svg" alt="">
                </div>
                <div class="title">
                    <h4>${title.value}
                    </h4>
        
                <img src="assets/images/sec6/true.svg" alt="true">
        
        </div>
        <p>${des.value}</p>
        <h5>Posted on August 8, 2024</h5>
    </div>
    </div>
            `
            des.value = '';
            title.value = '';

        })

        btnRev2.addEventListener('click', () => {


            secRev2.innerHTML += `

            <div class="col-6">
                <div class="card9  text-start">
                    <div class="pointstars d-flex justify-content-between align-items-center">
                        <div class="stars">
                            <img src="assets/images/sec3/Star.svg" alt="star">
                            <img src="assets/images/sec3/Star.svg" alt="star">
                            <img src="assets/images/sec3/Star.svg" alt="star">
                            <img src="assets/images/sec3/halfStar.svg" alt="star">
                        </div>
                    <img src="../../assets/images/sec9/points.svg" alt="">
                </div>
                <div class="title">
                    <h4>${title2.value}
                    </h4>
        
                <img src="assets/images/sec6/true.svg" alt="true">
        
        </div>
        <p>${des2.value}</p>
        <h5>Posted on August 8, 2024</h5>
    </div>
    </div>
            `
            des2.value = '';
            title2.value = '';

        })



        btnRev3.addEventListener('click', () => {


            secRev3.innerHTML += `

            <div class="col-6">
                <div class="card9  text-start">
                    <div class="pointstars d-flex justify-content-between align-items-center">
                        <div class="stars">
                            <img src="assets/images/sec3/Star.svg" alt="star">
                            <img src="assets/images/sec3/Star.svg" alt="star">
                            <img src="assets/images/sec3/Star.svg" alt="star">
                            <img src="assets/images/sec3/halfStar.svg" alt="star">
                        </div>
                    <img src="../../assets/images/sec9/points.svg" alt="">
                </div>
                <div class="title">
                    <h4>${title3.value}
                    </h4>
        
                <img src="assets/images/sec6/true.svg" alt="true">
        
        </div>
        <p>${des3.value}</p>
        <h5>Posted on August 8, 2024</h5>
    </div>
    </div>
            `
            des3.value = '';
            title3.value = '';

        })

    }

}