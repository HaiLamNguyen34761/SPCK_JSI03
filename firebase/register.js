import { auth } from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js"
const emailElm = document.getElementById('email');
const passwordElm = document.getElementById('password1');
const registerForm = document.getElementById('register-form');

const handleRegister = (e) => {
  e.preventDefault()
  const email = emailElm.value;
  const password = passwordElm.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(user.email)
      window.location = "./index.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode)
    });

}

registerForm.addEventListener('submit', handleRegister)