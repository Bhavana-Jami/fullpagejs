const btn = document.querySelector(".btn");
const con=document.querySelector(".containe");
const b=document.querySelector(".btn");
const b2=document.querySelector(".btn2");
const b3=document.querySelector(".btn3");
const end=document.querySelector(".end_screen");
end.style.color='#E55D87'
b2.style.display='none'
b3.style.display='none'
btn.addEventListener('click', () => {
    con.classList.add("container");
  
    fetch(' https://www.affirmations.dev/ ')
        .then(res => res.json())
        .then(data => {
            const x = data.affirmation
            document.querySelector('.containe').innerHTML = x;
        })
        b.style.display='none'
        b2.style.display='block'
        b3.style.display='block'
})
b2.addEventListener('click', () => {
    con.classList.add("container");
    fetch(' https://www.affirmations.dev/ ')
        .then(res => res.json())
        .then(data => {
            const x = data.affirmation
            document.querySelector('.containe').innerHTML = x;
        })   
})
b3.addEventListener('click',()=>{
    b2.style.display='none'
    con.style.display='none'
    b3.style.display='none'
    end.style.display='block'
    end.classList.add("lol")
})
