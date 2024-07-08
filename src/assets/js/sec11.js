

export const sec11 = () => {
    
    
    const circleEle=document.querySelectorAll(".colors-circle span");
    const btnsSize=document.querySelectorAll(".btns-size span");
   

    circleEle.forEach((ele)=>{
        ele.addEventListener('click',()=>{
            circleEle.forEach((ele)=>{
                ele.classList.add('non-active-color')
            });
            ele.classList.remove('non-active-color')
        })
    })

    btnsSize.forEach((ele)=>{
        ele.addEventListener('click',()=>{
            btnsSize.forEach((ele)=>{
                ele.classList.remove('active-size')
            });
            ele.classList.add('active-size')
        })
    })
    

}