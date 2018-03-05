function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $("pic").attr('src',profile.getImageUrl());
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}





































// var accessToken;
// var config = {
//     'client_id': ' 619209088071-vhf9d3bfbo5nt4hcoe7q9fskm5atqk5r.apps.googleusercontent.com ',
//     'scope': 'https://www.googleapis.com/auth/userinfo.profile',
// };    
 
// function auth() {
 
//     gapi.auth.authorize(config, function() {
//         accessToken = gapi.auth.getToken().access_token;
//         console.log('We have got our token....');
//         console.log(accessToken);
//         console.log('We are now going to validate our token....');
//         validateToken();
               
//     });
// }
 
// function validateToken() {
//     $.ajax({
//         url: 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' + accessToken,
//         data: null,
//         success: function(response){  
//             console.log('Our token is valid....');
//             console.log('We now want to get info about the user using our token....');
//             getUserInfo();
//         },  
//         error: function(error) {
//             console.log('Our token is not valid....');
//         },
//         dataType: "jsonp" 
//     });
// }
 
// function getUserInfo() {
//     $.ajax({
//         url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + accessToken,
//         data: null,
//         success: function(response) {
//             console.log('We have gotten info back....');
//             console.log(response);
//             $('#user').html(response.name);
             
//         },
//         dataType: "jsonp"
//     });
// }s