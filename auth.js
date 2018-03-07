var btn = document.getElementById('btn');
btn.addEventListener('click', 	function(){
  console.log('SignOut button clicked');
  var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User SignedOut');
      document.getElementById('log').style.display="block";
      document.getElementById('data').style.display="none";
    });
});
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  document.getElementById('log').style.display="none";
  document.getElementById('data').style.display="block";
  document.getElementById('username').innerHTML= profile.getName();
  document.getElementById('pic').src= profile.getImageUrl();
  document.getElementById('email').innerHTML="Email: " + profile.getEmail(); // This is null if the 'email' scope is not present.
}
