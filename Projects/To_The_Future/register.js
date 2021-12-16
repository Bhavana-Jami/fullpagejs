function register(){
    if(document.getElementById("user").value=="" || document.getElementById("pwd").value==""){
        alert("Fill all the inputs !")
    }
    else{
        alert("Registered successfully !");
    }
}
function login(){
    window.location="index.html";
}
