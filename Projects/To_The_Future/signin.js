function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $('#name').text(profile.getName());
    alert("Sign In successful !");
}