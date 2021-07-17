
// for the hamburgermenu
const hamburger=document.querySelector('.hamburger_menu');
const navlinks=document.querySelector('.links');
const linkss=document.querySelectorAll('.links li');

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle("open");
});

//for fetching the value from the write_a_letter.html,the textarea content
// document.getElementsById('letter1').innerHTML=localStorage.getItem('your_letter');
document.querySelector("#letter1").innerHTML = localStorage.getItem('your_letter');