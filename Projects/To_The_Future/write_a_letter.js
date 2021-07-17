
// for teh hamburger menu
const hamburger=document.querySelector('.hamburger_menu');
const navlinks=document.querySelector('.links');
const linkss=document.querySelectorAll('.links li');

var date=document.querySelector('#date').value;


hamburger.addEventListener('click', () => {
    navlinks.classList.toggle("open");
});

//sending data to the your_letters.html,sending the textarea content to the grid item there

//function for sending the text
// function sending_content_yourletters(){
//     var string_textarea=document.getElementById("texteditor").value;
//     localStorage.setItem("your_letter",string_textarea);
// }
// function redirecting_to_yourshtml(){
//     window.location="your_letters.html";
// }
// // combining the above two functions on button click
// // function send(){
// //     // sending_content_yourletters();
// //     // setTimeout(function(){
// //     //     redirecting_to_yourshtml();
// //     // },5000);
// //     swal("Hello world!");
// // }
function sending_content_yourletters(){
    var string_textarea=document.getElementById("texteditor").value;
    localStorage.setItem('your_letter',string_textarea);
}
function redirecting_to_yourshtml(){
    window.location="your_letters.html";
}
function redirecting_to_readhtml(){
    window.location="read.html";
}
function radio(){
    var public=document.getElementById("public");
    if(public.checked){
        var string_text=document.getElementById("texteditor").value;
        localStorage.setItem('yourr_letter',string_text);
    }
}
function send(){
    sending_content_yourletters();
    redirecting_to_yourshtml();
    // string_textarea.value='';
    // redirecting_to_readhtml();
    radio();
    // setTimeout(function(){
   
    // },1000);
    // swal("Wow..your letter just sent to the future !");
}


// getting dates
// var myDate=new Date();


