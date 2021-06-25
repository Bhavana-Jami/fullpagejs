
const hamburger=document.querySelector('.hamburger_menu');
const navlinks=document.querySelector('.links');
const linkss=document.querySelectorAll('.links li');

// getting dates
var myDate=new Date();
//getting dates from dropdown

// function send(){
//     var day=document.getElementById('date1').selectedIndex;
//     if(selectedIndex>0){
//         window.location="your_letter.html";
//     }
//     else if(selectedIndex<=myDate.getDay()){
//         alert("Please select a date from the future !");
//     }
//     else{
//         alert("Please select a date !");
//     }

// }
function send(){
    window.location="your_letter.html";
}

// alert(day);

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle("open");
});



// function send(){
//     var str=document.getElementById("editor").value;
//     var re=document.getElementById("result");
//     re.value=str;
//     str='';
// }

