import { signOut } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { auth } from "./firebase/config.js"

const logoutBtn = document.getElementById('logout-btn');

const handleLogout = () => {
    signOut(auth).then(() => {
    // Sign-out successful.
    window.location = './login.html'
  }).catch((error) => {
    // An error happened.
  });
}

logoutBtn.addEventListener('click',handleLogout);
