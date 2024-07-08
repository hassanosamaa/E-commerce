


export const sec8 = () => {

    const circleBtn=document.querySelectorAll(".circle");
    const sizeBtn=document.querySelectorAll(".btns-size span");
    const minBtn=document.querySelectorAll(".min");
    const maxBtn=document.querySelectorAll(".max");
    const numEle=document.querySelectorAll(".num");
    const shirt=document.querySelectorAll(".it-shirt img");
    const shirtDiv=document.querySelectorAll(".it-shirt");
    const imgShirt=document.querySelector(".img-shirt img");

 

    shirt.forEach((ele,index)=>{
        ele.addEventListener('click',()=>{
            shirt.forEach((ele,index)=>{
                shirtDiv[index].classList.remove('active-shirt');
            })
            let src=ele.getAttribute('src');
            imgShirt.setAttribute("src",src);
            shirtDiv[index].classList.add('active-shirt')
        })
    })

    circleBtn.forEach((ele)=>{
      ele.addEventListener('click',(e)=>{
        circleBtn.forEach((e)=>{
            e.classList.add("non-active-circle");
        })
        ele.classList.remove("non-active-circle");
        
      })
        
    })

    sizeBtn.forEach((ele)=>{
        ele.addEventListener('click',()=>{
            sizeBtn.forEach((e)=>{
                e.classList.remove('active-size')
            })
            ele.classList.add("active-size");
        })
    })

    let value=1;
    minBtn.forEach((ele,index)=>{
        ele.addEventListener('click',()=>{
            value--;
            numEle[index].innerHTML=value;
        })
    })
   
    maxBtn.forEach((ele,index)=>{
        ele.addEventListener('click',()=>{
            value++;
            numEle[index].innerHTML=value;
        })
    })
    


}