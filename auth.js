
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $("pic").attr('src',profile.getImageUrl());
  document.getElementById('log').style.display="none";
  document.getElementById('data').style.display="block";
  getElementById('username').innerHTML= profile.getName();
  getElementById('pic').src= profile.getImageUrl();
  getElementById('email').innerHTML="Email: " + profile.getEmail(); // This is null if the 'email' scope is not present.
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      document.getElementById('log').style.display="block";
      document.getElementById('data').style.display="none";
    });
}