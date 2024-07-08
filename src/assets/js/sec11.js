

export const sec11 = () => {


    const circleEle = document.querySelectorAll(".colors-circle span");
    const btnsSize = document.querySelectorAll(".btns-size span");
    const iconFilter = document.querySelector(".filter-icon");
    const asideEle = document.querySelector("#aside");
    
    const aside = document.querySelector("aside");
    const rightsec11 = document.querySelector(".rightsec11");
    const cardss = document.querySelectorAll(".cardss");
    const filterIcon2 = document.querySelector(".filter-icon2");


    if (iconFilter != null) {



        iconFilter.addEventListener('click', () => {

            aside.classList.toggle("d-none");

            
            asideEle.classList.toggle("col-3")
            asideEle.classList.toggle("col-1")
            rightsec11.classList.toggle("col-9")
            rightsec11.classList.toggle("col-12")
            cardss.forEach((ele)=>{
                ele.classList.toggle("col-4")
                ele.classList.toggle("col-3")
            })
            filterIcon2.classList.toggle("d-none")

            
           
        })

        filterIcon2.addEventListener('click',()=>{
            aside.classList.toggle("d-none");

            
            asideEle.classList.toggle("col-3")
            asideEle.classList.toggle("col-1")
            rightsec11.classList.toggle("col-9")
            rightsec11.classList.toggle("col-12")
            cardss.forEach((ele)=>{
                ele.classList.toggle("col-4")
                ele.classList.toggle("col-3")
            })
            filterIcon2.classList.toggle("d-none")

        })


        circleEle.forEach((ele) => {
            ele.addEventListener('click', () => {
                circleEle.forEach((ele) => {
                    ele.classList.add('non-active-color')
                });
                ele.classList.remove('non-active-color')
            })
        })

        btnsSize.forEach((ele) => {
            ele.addEventListener('click', () => {
                btnsSize.forEach((ele) => {
                    ele.classList.remove('active-size')
                });
                ele.classList.add('active-size')
            })
        })


    }
}