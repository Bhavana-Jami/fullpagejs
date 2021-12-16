const closeHeart=document.querySelector('.close');
const arrowHeart=document.querySelector('.open');

closeHeart.addEventListener('click',()=>{
    if(arrowHeart.classList.contains('.opne')){
        arrowHeart.classList.add('.active');
    }
})