import { auth } from "./config.js";
import { updateProfile } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js"; 
const submitBtn = document.getElementById('submit-btn');
const user = auth.currentUser;
const name = document.getElementById('name');
const photo = document.getElementById('photo');








const profileUpdate = () => {
    const user = auth.currentUser;
    const name = document.getElementById('name');
    const photo = document.getElementById('photo');
    updateProfile(auth.currentUser, {
        displayName: name.value, photoURL: photo.value,
      }).then(() => {
        alert('Update complete!')
      }).catch((error) => {
        alert(error.code)
      });
}
submitBtn.addEventListener('click', profileUpdate);

