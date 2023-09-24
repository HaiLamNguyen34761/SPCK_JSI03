import { auth } from "./config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js"; 

const fullname = document.getElementById('fullname')
const profileGet = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            fullname.textContent = user.displayName;
            
        }
    })
}

profileGet()