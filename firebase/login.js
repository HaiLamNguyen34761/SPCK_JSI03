import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

const emailElm = document.getElementById('email');
const passwordElm = document.getElementById('password');
const loginBtn = document.getElementById('Submit');


const handleLogin = ()=> {
    const email = usernameElm.value;
    const password = passwordElm.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    window.location= './lesson6.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    alert(errorCode);
  });
    }
  
loginBtn.addEventListener('click',handleLogin)

(function() {
  console.log('Start file login with firebase');
  // Initialize Firebase
  var config = {
      apiKey: "xxxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "xxxx.firebaseio.com",
      projectId: "xxxx",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxxx"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  //Google singin provider
  var ggProvider = new firebase.auth.GoogleAuthProvider();
  //Facebook singin provider
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  //Login in variables
  const btnGoogle = document.getElementById('btnGoogle');
  const btnFaceBook = document.getElementById('btnFacebook');


  
      btnGoogle.addEventListener('click', e => {
          firebase.auth().signInWithPopup(ggProvider).then(function(result) {
              var token = result.credential.accessToken;
              var user = result.user;
              console.log('User>>Goole>>>>', user);
              userId = user.uid;
              window.location = 'https://accounts.google.com/accountchooser/identifier?checkedDomains&continue=https%3A%2F%2Faccounts.google.com%2F&dsh=S-1140772437%3A1694617722996550&flowEntry=AccountChooser&flowName=GlifWebSignIn&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AYZoVhcAfrKmm7ExEL65R4U87TwLUVmz1PWST6lpDsxiJCR-k7PdPw6V0yUDt2w4bkorXZlIY1UUSw&pstMsg=0&theme=glif&authuser=0'

          }).catch(function(error) {
              console.error('Error: hande error here>>>', error.code)
          })
      }, false)
        
      //Sing in with Facebook
      btnFaceBook.addEventListener('click', e => {
          firebase.auth().signInWithPopup(fbProvider).then(function(result) {
              // This gives you a Facebook Access Token. You can use it to access the Facebook API.
              var token = result.credential.accessToken;
              // The signed-in user info.
              var user = result.user;
              console.log('User>>Facebook>', user);
              // ...
              userId = user.uid;
          window.location = 'https://www.facebook.com/?stype=lo&jlou=AfeHB_PWtqANdlrDVSig82kD_Lye_siYC8WOteU1OYmywVu1EXqHqii74q-yyQNd5NMm1PI6egiD2XYpPFwosgxubmbgUH9q8kH48S4Hd65Yxw&smuh=61132&lh=Ac9GMZTgfdMKAUm4n6g'
          }).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
              console.error('Error: hande error here>Facebook>>', error.code)
          });
      }, false)
      //jquery 
}())